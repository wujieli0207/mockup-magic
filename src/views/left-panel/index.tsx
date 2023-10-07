import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import { isArray } from 'lodash-es'
import mockupList from '@/components/Mockup'
import { IMockupComponent } from 'types/mockup'

const LeftPanel = () => {
  const mockupGroup = mockupList.reduce(
    (result: CollapseProps['items'], item: IMockupComponent, index: number) => {
      if (!result) return

      const { label, type } = item

      const existItem = result.find((item) => item.label === type)

      if (existItem && isArray(existItem.children)) {
        existItem.children.push(<p key={label}>{label}</p>)
      } else {
        result.push({
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
    <div className="w-48 h-screen shadow">
      <div className="flex items-center justify-center text-xl">
        Mockup Magic
      </div>
      <Collapse
        items={mockupGroup}
        size="small"
        ghost={true}
        defaultActiveKey={defaultActiveKey}
        className="mt-2"
      />
    </div>
  )
}

export default LeftPanel
