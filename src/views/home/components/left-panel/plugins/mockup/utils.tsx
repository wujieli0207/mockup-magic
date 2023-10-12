import { nanoid } from 'nanoid'
import { store } from '@/redux'
import { setMockupInstance } from '@/redux/modules/painting/action'
import type { IMockupComponent } from '#/mockup'
import { isArray } from 'lodash-es'
import { IPaintingState } from '@/redux/interface'

/**
 * @description 点击使用按钮，使用当前模型
 */
export function handleGenerateMockupInstance(mockup: IMockupComponent) {
  store.dispatch(
    setMockupInstance({
      _vid: nanoid(),
      imageUrl: [''],
      ...mockup,
    })
  )
}

interface IGetGroupMockup {
  mockupList: IMockupComponent[]
  clickMockupFn: () => void
  mockupInstance: IPaintingState['mockupInstance']
}

interface IGetGroupMockupCommon {
  key: string
  label: IMockupComponent['type']
}

interface IGetGroupMockupData extends IGetGroupMockupCommon {
  children: Array<() => JSX.Element>
}

interface IGetGroupMockupResult extends IGetGroupMockupCommon {
  children: JSX.Element
}

/**
 * @description 生成模型分组数据
 */
export function getGroupMockup(
  params: IGetGroupMockup
): IGetGroupMockupResult[] {
  const { mockupList, clickMockupFn, mockupInstance } = params

  // 生成分组数据
  const mockupGroupData = mockupList.reduce(
    (result: IGetGroupMockupData[], item: IMockupComponent, index: number) => {
      const { key, label, type, preview } = item

      const child = () => {
        return (
          <span
            key={label}
            className="mb-4 mr-4"
            onClick={() => {
              handleGenerateMockupInstance(item)
              clickMockupFn()
            }}
          >
            {preview({ isFocus: key === mockupInstance.key })}
          </span>
        )
      }

      const existItem = result!.find((item) => item.label === type)
      if (existItem && isArray(existItem.children)) {
        existItem.children.push(() => child())
      } else {
        result!.push({
          key: `${index + 1}`,
          label: type,
          children: [() => child()],
        })
      }

      return result
    },
    []
  )

  // 生成分组结果，主要是保证 child 属性横向排列
  const mockupGroup = mockupGroupData.map((item) => {
    return {
      ...item,
      children: (
        <div className="flex flex-wrap">
          {item.children.map((child) => child())}
        </div>
      ),
    }
  })

  return mockupGroup
}
