// 插件属性定义
export interface IPluginComponent {
  key: string
  label: string
  order: number
  icon?: string
  plugin: () => JSX.Element
}
