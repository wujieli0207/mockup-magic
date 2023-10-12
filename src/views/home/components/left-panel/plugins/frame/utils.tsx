import { nanoid } from 'nanoid'
import { store } from '@/redux'
import { setFrameInstance } from '@/redux/modules/painting/action'
import { isArray } from 'lodash-es'
import { IPaintingState } from '@/redux/interface'
import { IFrameComponent } from '#/frame'
import { FRAME_TYPE_VL } from '@/constants/frame-constant'

/**
 * @description 点击使用按钮，使用当前模型
 */
export function handleGenerateFrameInstance(frame: IFrameComponent) {
  store.dispatch(
    setFrameInstance({
      _vid: nanoid(),
      ...frame,
    })
  )
}

interface IGetGroupMockup {
  frameList: IFrameComponent[]
  clickMockupFn: () => void
  frameInstance: IPaintingState['frameInstance']
}

interface IGetGroupFrameCommon {
  key: string
  type: IFrameComponent['type']
  label: string
}

interface IGetGroupFrameData extends IGetGroupFrameCommon {
  children: Array<() => JSX.Element>
}

interface IGetGroupFrameResult extends IGetGroupFrameCommon {
  children: JSX.Element
}

/**
 * @description 生成模型分组数据
 */
export function getGroupFrame(params: IGetGroupMockup): IGetGroupFrameResult[] {
  const { frameList, clickMockupFn, frameInstance } = params

  // 生成分组数据
  const frameGroupData = frameList.reduce(
    (result: IGetGroupFrameData[], item: IFrameComponent, index: number) => {
      const { key, label, type, preview } = item

      const child = () => {
        return (
          <span
            key={label}
            className="mb-4 mr-4"
            onClick={() => {
              handleGenerateFrameInstance(item)
              clickMockupFn()
            }}
          >
            {preview({ isFocus: key === frameInstance?.key })}
          </span>
        )
      }

      const existItem = result!.find((item) => item.type === type)
      if (existItem && isArray(existItem.children)) {
        existItem.children.push(() => child())
      } else {
        result!.push({
          key: `${index + 1}`,
          type,
          label: FRAME_TYPE_VL[type],
          children: [() => child()],
        })
      }

      return result
    },
    []
  )

  // 生成分组结果，主要是保证 child 属性横向排列
  const frameGroup = frameGroupData.map((item) => {
    return {
      ...item,
      children: (
        <div className="flex flex-wrap items-end">
          {item.children.map((child) => child())}
        </div>
      ),
    }
  })

  return frameGroup
}
