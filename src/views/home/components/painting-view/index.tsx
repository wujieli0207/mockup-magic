import { IReduxState } from '@/redux'
import { useSelector } from 'react-redux'

const PaintingView = () => {
  const painting = useSelector((state: IReduxState) => state.painting)
  const { frameInstance } = painting

  return (
    // 背景
    <div
      className="flex items-center justify-center mt-16 rounded-lg h-96 bg-green-50"
      style={{
        aspectRatio: (frameInstance.simplePixels ?? '').replace(':', '/'),
      }}
    ></div>
  )
}

export default PaintingView
