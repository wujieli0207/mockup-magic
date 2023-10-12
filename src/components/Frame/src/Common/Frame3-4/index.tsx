import { IFrameComponent } from '#/frame'
import { FramePreview } from '@/components/Preview'
import { FRAME_TYPE_KV } from '@/constants/frame-constant'

const frame: IFrameComponent = {
  key: 'frame3:4',
  label: '1080 x 1440',
  simplePixels: '3:4',
  totalPixels: '1080 x 1440',
  type: FRAME_TYPE_KV.COMMON,
  order: 7,
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
