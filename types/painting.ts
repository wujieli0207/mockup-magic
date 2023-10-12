import { IFrameComponent } from './frame'
import { IMockupComponent } from './mockup'

// 模型实例属性
export interface IMockupInstance extends IMockupComponent {
  _vid: string // 唯一 id
  imageUrl: string[] // 图片地址，可能存在多张图片
}

export interface IFrameInstance extends IFrameComponent {
  _vid: string // 唯一 id
}
