import { IFrameComponent } from '#/frame'
import { FramePreview } from '@/components/Preview'
import { FRAME_TYPE_KV } from '@/constants/frame-constant'

const frame: IFrameComponent = {
  key: 'frame4:5',
  label: '1080 x 1350',
  simplePixels: '4:5',
  totalPixels: '1080 x 1350',
  type: FRAME_TYPE_KV.COMMON,
  order: 6,
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
