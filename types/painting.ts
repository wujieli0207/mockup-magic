import { IMockupComponent } from './mockup'

// 画布实例属性
export interface IMockupInstance extends IMockupComponent {
  _vid: string // 唯一 id
  imageUrl: string[] // 图片地址，可能存在多张图片
}
