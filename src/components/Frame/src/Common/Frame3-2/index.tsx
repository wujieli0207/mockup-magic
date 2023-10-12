import { IFrameComponent } from '#/frame'
import { FramePreview } from '@/components/Preview'
import { FRAME_TYPE_KV } from '@/constants/frame-constant'

const frame: IFrameComponent = {
  key: 'frame3:2',
  label: '1920 x 1280',
  simplePixels: '3:2',
  totalPixels: '1920 x 1280',
  type: FRAME_TYPE_KV.COMMON,
  order: 2,
  preview: ({ isFocus }) => {
    return (
      <FramePreview
        simplePixels={frame.simplePixels}
        totalPixels={frame.totalPixels}
        isFocus={isFocus}
      />
    )
  },
  render: () => {
    return <div>{frame.simplePixels}</div>
  },
}

export default frame
