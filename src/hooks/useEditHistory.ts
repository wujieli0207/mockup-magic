import {
  Objectish,
  Patch,
  applyPatches,
  enablePatches,
  produceWithPatches,
} from 'immer'
import { useMemo, useState } from 'react'
import { isFunction } from 'lodash-es'

enablePatches()

interface IHistoryStackItem {
  action: string // 操作名称
  actionTime: Date // 操作时间
  patches: Patch[]
  inversePatches: Patch[]
}

export interface IupdateOptions {
  callback?: (patches: Patch[], inversePatches: Patch[]) => void
}

const useEditHistory = <T extends Objectish>(baseState: T) => {
  // 历史记录
  const [historyStack, setHistoryStack] = useState<IHistoryStackItem[]>([])
  // 当前索引
  const [historyStackPointer, setHistoryStackPointer] = useState(-1)
  // 是否开启记录
  const [historyable, setHistoryable] = useState(false)

  const [state, setState] = useState(baseState)

  /**
   * @description 撤销任务数量统计
   */
  const undoCount = useMemo(
    () => historyStackPointer + 1,
    [historyStackPointer]
  )

  /**
   * @description 重做任务数量统计
   */
  const redoCount = useMemo(
    () => historyStack.length - historyStackPointer - 1,
    [historyStack, historyStackPointer]
  )

  /**
   * @description 判断是否禁止撤销
   */
  const isDisabledUndo = useMemo(
    () => historyStackPointer < 0,
    [historyStackPointer]
  )

  /**
   * @description 判断是否禁止重做
   */
  const isDisabledRedo = useMemo(
    () => historyStackPointer >= historyStack.length - 1,
    [historyStackPointer, historyStack]
  )

  /**
   * @description 是否开启历史记录
   */
  function enable(value = true) {
    setHistoryable(value)
  }

  /**
   * @description 撤销操作
   */
  function undo() {
    if (isDisabledUndo) return

    const { inversePatches } = historyStack[historyStackPointer]
    setState(applyPatches(state, inversePatches))
    setHistoryStackPointer(historyStackPointer - 1)
  }

  /**
   * @description 重做操作
   */
  function redo() {
    if (isDisabledRedo) return

    setHistoryStackPointer(historyStackPointer + 1)
    const { patches } = historyStack[historyStackPointer]
    setState(applyPatches(state, patches))
  }

  /**
   * @description 更新操作
   */
  function update(
    updater: (draft: T) => any,
    action: string,
    options: IupdateOptions = {}
  ) {
    const { callback } = options
    const [nextState, patches, inversePatches] = produceWithPatches(
      state,
      updater
    )

    // 更新当前状态
    setState(nextState)

    // 记录历史记录

    if (historyable) {
      setHistoryStackPointer(historyStackPointer + 1)

      const newHistoryStack = historyStack.slice(0, historyStackPointer)
      newHistoryStack.length = historyStackPointer
      newHistoryStack.push({
        action,
        actionTime: new Date(),
        patches,
        inversePatches,
      })
      setHistoryStack(newHistoryStack)
    }

    if (isFunction(callback)) {
      callback(patches, inversePatches)
    }
  }

  return {
    state,
    undoCount,
    redoCount,
    isDisabledUndo,
    isDisabledRedo,
    enable,
    undo,
    redo,
    update,
  }
}

export default useEditHistory
