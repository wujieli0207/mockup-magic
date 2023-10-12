import { Card } from 'antd'
import { IFrameComponent } from '#/frame'
import FrameThumbPreview from '../FrameThumbPreview'

interface IProps extends Pick<IFrameComponent, 'simplePixels' | 'totalPixels'> {
  isFocus?: boolean
  label?: IFrameComponent['label']
}

const FramePreview = (props: IProps) => {
  const { simplePixels, totalPixels, isFocus, label } = props

  return (
    <Card
      hoverable={true}
      className={`flex justify-center w-48 rounded-lg shadow cursor-pointer ${
        isFocus ? 'border border-black border-solid' : ''
      }`}
    >
      <FrameThumbPreview
        simplePixels={simplePixels}
        widthClass="w-40"
        fontSizeClass="text-2xl"
      />

      {/* 标题 */}
      {label && (
        <div className="flex justify-center w-40 mt-2 text-base ">{label}</div>
      )}

      {/* 详细分辨率 */}
      <div
        className={`flex justify-center w-40 text-xs text-zinc-500 ${
          label ? '' : 'mt-2'
        }`}
      >
        {totalPixels}
      </div>
    </Card>
  )
}

export default FramePreview
