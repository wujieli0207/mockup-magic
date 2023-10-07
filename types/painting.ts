// 画布实例属性
export interface IPaintingInstance {
  _vid: string // 唯一 id
  mockup: string // TODO mockup 模型，类型待定
  imageUrl: string[] // 图片地址，可能存在多张图片
}
