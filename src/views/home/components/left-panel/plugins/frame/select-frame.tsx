import { Card, Modal, Tabs } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import frameList from '@/components/Frame'
import { getGroupFrame } from './utils'
import { IReduxState } from '@/redux'
import FrameThumbPreview from '@/components/Preview/src/FrameThumbPreview'
import { FRAME_TYPE_VL } from '@/constants/frame-constant'

export default function SelectFrame() {
  const painting = useSelector((state: IReduxState) => state.painting)
  const { frameInstance } = painting

  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const frameGroup = getGroupFrame({
    frameList,
    clickMockupFn: handleClickMockup,
    frameInstance,
  })

  function handleClickMockup() {
    setIsOpenSelect(!isOpenSelect)
  }

  return (
    <>
      {/*  */}
      <Card hoverable={true} className="shadow" onClick={handleClickMockup}>
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <FrameThumbPreview
              simplePixels={frameInstance.simplePixels ?? ''}
              heightClass="h-14"
              fontSizeClass="text-xs"
            />

            <div className="ml-2">
              <div className="text-base">
                {FRAME_TYPE_VL[frameInstance.type ?? 'common']}
              </div>
              <div className="text-xs">
                {Object.keys(frameInstance).length > 0
                  ? frameInstance.totalPixels
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
        <Tabs items={frameGroup} size="small" />
      </Modal>
    </>
  )
}
