import { IMAGE_FALLBACK } from '@/constants/common-constant'
import { Image } from 'antd'

interface IProps {
  src: string
  fallback?: string
  width?: number
  height?: number
  handleBtn?: () => JSX.Element
}

const MockupPreview = (props: IProps) => {
  const {
    src,
    fallback = IMAGE_FALLBACK,
    width = 100,
    height = 100,
    handleBtn,
  } = props

  return (
    <div className="relative">
      <Image width={width} height={height} src={src} fallback={fallback} />
      <div className="absolute top-0 -left-1">{handleBtn && handleBtn()}</div>
    </div>
  )
}

export default MockupPreview
