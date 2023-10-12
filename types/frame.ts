// 模型组件属性

import { FRAME_TYPE_KV } from '@/constants/frame-constant'

export interface IFrameComponent {
  key: string // 唯一 key
  label: string // 标题
  simplePixels: string // 简单分辨率
  totalPixels: string // 完整分辨率
  type: ValueOf<typeof FRAME_TYPE_KV>
  render: () => JSX.Element
  preview: (params: IFramePreviewParams) => JSX.Element
  order: number // 面板中的顺序
}

export interface IFramePreviewParams {
  isFocus?: boolean // 是否被选中
}
