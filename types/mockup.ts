import { MOCUKUP_TYPE_KV } from '@/constants/mockup-contant'

// 模型组件属性
export interface IMockupComponent {
  label: string // 组件标题
  type: ValueOf<typeof MOCUKUP_TYPE_KV>
  render: () => JSX.Element
  preview?: () => JSX.Element
}
