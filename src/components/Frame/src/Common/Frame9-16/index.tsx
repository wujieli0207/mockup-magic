import { IFrameComponent } from '#/frame'
import { FramePreview } from '@/components/Preview'
import { FRAME_TYPE_KV } from '@/constants/frame-constant'

const frame: IFrameComponent = {
  key: 'frame9:16',
  label: '1080 x 1920',
  simplePixels: '9:16',
  totalPixels: '1080 x 1920',
  type: FRAME_TYPE_KV.COMMON,
  order: 9,
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
