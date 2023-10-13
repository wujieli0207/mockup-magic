import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'

// 模型组件属性
export interface IMockupComponent {
  key: string // 组件唯一 key
  label: string // 组件标题
  type: ValueOf<typeof MOCUKUP_TYPE_KV>
  details: IMockupDetails
  render: () => JSX.Element
  preview: (params: IMockupPreviewParams) => JSX.Element
  props: IMockupProps
  isNew: boolean // 是否是上新模型， 默认为 false
}

export interface IMockupDetails {
  device: string // 机型
  screenPixels: string // 分辨率
  releaseYear: number // 发布时间
}

export interface IMockupPreviewParams {
  isFocus?: boolean // 是否被选中
}

// 模型可以调整的属性
export interface IMockupProps {
  styles: IMockupPropsStyle[] // 模型样式
  layouts: IMockupPropsLayout[] // string 模型与背景结合的样式配置
  shadow: number // 阴影数值
  scale: number // 缩放比例
  positionX: number // 在画布上的位置，x 轴
  positionY: number // 在画布上的位置，Y 轴
  isHidden: boolean // 是否隐藏，true 隐藏
}

export interface IMockupPropsStyle {
  label: string // style 名称
  imgUrl: string // style 图片路径
}

export interface IMockupPropsLayout {
  imgUrl?: string // 预览图地址
}
