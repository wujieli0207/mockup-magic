import { IMockupComponent, IMockupProps } from './mockup'

// 画布实例属性
export interface IPaintingInstance {
  _vid: string // 唯一 id
  mockupKey: IMockupComponent['key'] // 对应模型的唯一 key
  imageUrl: string[] // 图片地址，可能存在多张图片
  props: IMockupProps
}
