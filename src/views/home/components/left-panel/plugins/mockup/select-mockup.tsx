import { Card, Modal, Tabs } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import mockupList from '@/components/Mockup'
import { getGroupMockup } from './utils'
import { IReduxState } from '@/redux'

export default function SelectMockup() {
  const painting = useSelector((state: IReduxState) => state.painting)
  const { paintingInstance } = painting

  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const mockupGroup = getGroupMockup({
    mockupList,
    clickMockupFn: handleClickMockup,
    paintingInstance,
  })

  function handleClickMockup() {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <>
      <Card hoverable={true} onClick={handleClickMockup} className="shadow">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <img
              src={paintingInstance.props?.layouts[0].imgUrl}
              className="h-8 aspect-[4/3]"
            />

            <div className="ml-2">
              <div className="text-base">{paintingInstance.label}</div>
              <div className="text-xs">1170 * 2532</div>
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
        <Tabs items={mockupGroup} size="small" />
      </Modal>
    </>
  )
}
