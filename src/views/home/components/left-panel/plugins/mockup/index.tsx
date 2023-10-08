import type { CollapseProps } from 'antd'
import { Collapse, Button } from 'antd'
import { isArray } from 'lodash-es'
import mockupList from '@/components/Mockup'
import { IMockupComponent } from '#/mockup'
import { IPluginComponent } from '#/plugin'
import { handleClickUseBtn } from './utils'

const plugin = () => {
  const mockupGroup = mockupList.reduce(
    (result: CollapseProps['items'], item: IMockupComponent, index: number) => {
      const { key, label, type, preview } = item

      const child = () => {
        return (
          <div key={label} className="flex items-center mb-2">
            {preview({
              handleBtn: () => (
                <Button
                  type="link"
                  size="small"
                  onClick={() => handleClickUseBtn(key)}
                >
                  使用
                </Button>
              ),
            })}
          </div>
        )
      }

      const existItem = result!.find((item) => item.label === type)
      if (existItem && isArray(existItem.children)) {
        existItem.children.push(child())
      } else {
        result!.push({
          key: `${index + 1}`,
          label: type,
          children: [child()],
        })
      }

      return result
    },
    []
  )

  const defaultActiveKey = mockupGroup!.map((item) => item.key!)

  return (
    <>
      <Collapse
        items={mockupGroup}
        size="small"
        ghost={true}
        defaultActiveKey={defaultActiveKey}
      />
    </>
  )
}

const mockup: IPluginComponent = {
  key: 'mockupPlugin',
  label: '模型',
  order: 1,
  plugin,
}

export default mockup
