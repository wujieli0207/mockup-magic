import { IMockupProps } from '#/mockup'
import { IMAGE_FALLBACK } from '@/constants/common-constant'
import { Card, Image } from 'antd'
import { isArray } from 'lodash-es'

interface IProps {
  label: string
  isNew: boolean // 是否展示上新标志
  src: string
  layouts: IMockupProps['layouts']
  fallback?: string
}

const MockupPreview = (props: IProps) => {
  const { label, isNew, src, layouts, fallback = IMAGE_FALLBACK } = props

  return (
    //
    <Card hoverable={true} className="w-48 rounded-lg shadow cursor-pointer ">
      {/* 标题 */}
      <div className="flex items-center justify-between">
        <div className="text-lg">{label}</div>

        {isNew && (
          <span className="p-1 text-xs text-white bg-black rounded">上新</span>
        )}
      </div>

      {/* 主展示图 */}
      <Image src={src} fallback={fallback} preview={false} />

      {/* 可选布局展示, 前三张图片展示，后展示总个数 */}
      <div className="flex">
        {isArray(layouts) &&
          layouts.slice(0, 3).map((item) => {
            return (
              <div className="mr-2 rounded bg-zinc-100">
                <img src={item.imgUrl} className="h-8 aspect-[4/3]" />
              </div>
            )
          })}

        <div className="flex items-center justify-center w-8 rounded bg-zinc-100">
          <span className="text-xs text-gray-500">
            {isArray(layouts) && `+${layouts.length}`}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default MockupPreview
