import { IFrameComponent } from '#/frame'

interface IProps extends Pick<IFrameComponent, 'simplePixels'> {
  heightClass?: string
  widthClass?: string
  fontSizeClass?: string
}

const FrameThumbPreview = (props: IProps) => {
  const {
    simplePixels,
    heightClass = '',
    widthClass = '',
    fontSizeClass = '',
  } = props

  return (
    <div
      className={`flex items-center justify-center 
                    rounded-lg bg-zinc-200 mt-2 text-zinc-500 
                    border border-zinc-400 border-solid ${heightClass} ${widthClass} ${fontSizeClass}`}
      style={{
        aspectRatio: simplePixels.replace(':', '/'),
      }}
    >
      {simplePixels}
    </div>
  )
}

export default FrameThumbPreview
