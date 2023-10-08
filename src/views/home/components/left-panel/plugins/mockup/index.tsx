import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import { isArray } from 'lodash-es'
import mockupList from '@/components/Mockup'
import { IMockupComponent } from '#/mockup'
import { IPluginComponent } from '#/plugin'

const plugin = () => {
  const mockupGroup = mockupList.reduce(
    (result: CollapseProps['items'], item: IMockupComponent, index: number) => {
      const { label, type } = item

      const existItem = result!.find((item) => item.label === type)

      if (existItem && isArray(existItem.children)) {
        existItem.children.push(<p key={label}>{label}</p>)
      } else {
        result!.push({
          key: `${index + 1}`,
          label: type,
          children: [<p key={label}>{label}</p>],
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
