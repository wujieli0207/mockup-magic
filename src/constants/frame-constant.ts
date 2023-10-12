import { defineConstants } from '@/utils/defineConstants'

/**
 * @description 模型分类
 */
export const { FRAME_TYPE_KV, FRAME_TYPE_VL } = defineConstants(
  [
    { key: 'COMMON', value: 'common', label: '通用' },
    { key: 'XIAO_HONG_SHU', value: 'xiaoHongShu', label: '小红书' },
    { key: 'TWITTER', value: 'twitter', label: 'Twitter' },
  ] as const,
  'FRAME_TYPE'
)
