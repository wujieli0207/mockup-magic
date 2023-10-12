import { Card, Modal, Tabs } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import mockupList from '@/components/Mockup'
import { getGroupMockup } from './utils'
import { IReduxState } from '@/redux'

export default function SelectMockup() {
  const painting = useSelector((state: IReduxState) => state.painting)
  const { mockupInstance } = painting

  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const mockupGroup = getGroupMockup({
    mockupList,
    clickMockupFn: handleClickMockup,
    mockupInstance,
  })

  const activeTabKey = mockupGroup.find(
    (item) => item.key === mockupInstance.type
  )?.key

  function handleClickMockup() {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <>
      <Card hoverable={true} onClick={handleClickMockup} className="shadow">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <img
              src={mockupInstance.props?.layouts[0].imgUrl}
              className="h-8 aspect-[4/3]"
            />

            <div className="ml-2">
              <div className="text-base">{mockupInstance.label}</div>
              <div className="text-xs">
                {Object.keys(mockupInstance).length > 0
                  ? mockupInstance.details?.screenPixels
                  : '请选择'}
              </div>
            </div>
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
        width={680}
        onCancel={handleClickMockup}
      >
        <Tabs items={mockupGroup} activeKey={activeTabKey} size="small" />
      </Modal>
    </>
  )
}
