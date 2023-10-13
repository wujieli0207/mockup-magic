import { IFrameComponent } from './frame'
import {
  IMockupComponent,
  IMockupProps,
  IMockupPropsLayout,
  IMockupPropsStyle,
} from './mockup'

// 模型实例属性
export interface IMockupInstance extends IMockupComponent {
  _vid: string // 唯一 id
  imageUrl: string[] // 图片地址，可能存在多张图片
  selectedProps: ISelectedProps
}

export interface ISelectedProps
  extends Pick<
    IMockupProps,
    'shadow' | 'scale' | 'positionX' | 'positionY' | 'isHidden'
  > {
  style: IMockupPropsStyle
  layout: IMockupPropsLayout
}

export interface IFrameInstance extends IFrameComponent {
  _vid: string // 唯一 id
}
