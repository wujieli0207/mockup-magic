import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'

// 模型组件属性
export interface IMockupComponent {
  key: string // 组件唯一 key
  label: string // 组件标题
  type: ValueOf<typeof MOCUKUP_TYPE_KV>
  render: () => JSX.Element
  preview: (params: IpreviewParams) => JSX.Element
}

interface IpreviewParams {
  handleBtn?: () => JSX.Element
}
