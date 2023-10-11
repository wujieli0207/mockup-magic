import { Card, Modal, Tabs } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { isArray } from 'lodash-es'
import mockupList from '@/components/Mockup'
import { IMockupComponent } from '#/mockup'
import { handleGeneratePaintingInstance } from './utils'

interface IMockupTabItem {
  key: string
  label: IMockupComponent['type']
  children: Array<JSX.Element>
}

const SelectMockup = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const mockupGroup = mockupList.reduce(
    (result: IMockupTabItem[], item: IMockupComponent, index: number) => {
      const { key, label, type, preview, props } = item

      const child = () => {
        return (
          <span
            key={label}
            className="mr-2"
            onClick={() => {
              handleGeneratePaintingInstance({ key, props })
              handleClickMockup()
            }}
          >
            {preview()}
          </span>
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

  function handleClickMockup() {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <>
      <Card hoverable={true} onClick={handleClickMockup} className="shadow">
        <div className="flex items-center justify-between cursor-pointer">
          <img
            src="https://shots.so/mockups/iPhone%2015/thumbs/1.png"
            className="h-8 aspect-[4/3]"
          />

          <div className="-ml-10">
            <div className="text-base">iPhone 15</div>
            <div className="text-xs">1170 * 2532</div>
          </div>

          <div className="text-gray-400">
            {isOpenSelect ? <UpOutlined /> : <DownOutlined />}
          </div>
        </div>
      </Card>

      {/* 模型选择 */}
      <Modal
        open={isOpenSelect}
        centered={true}
        footer={null}
        onCancel={handleClickMockup}
      >
        <Tabs items={mockupGroup} size="small" />
      </Modal>
    </>
  )
}

export default SelectMockup
