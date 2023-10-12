import { IFrameComponent } from '#/frame'
import { FramePreview } from '@/components/Preview'
import { FRAME_TYPE_KV } from '@/constants/frame-constant'

const frame: IFrameComponent = {
  key: 'frame2:3',
  label: '1080 x 1620',
  simplePixels: '2:3',
  totalPixels: '1080 x 1620',
  type: FRAME_TYPE_KV.COMMON,
  order: 8,
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
