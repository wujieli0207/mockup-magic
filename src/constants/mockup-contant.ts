import { defineConstants } from '@/utils/defineConstants'

/**
 * @description 模型分类
 */
export const { MOCUKUP_TYPE_KV, MOCUKUP_TYPE_VL } = defineConstants(
  [
    { key: 'MAC', value: 'mac', label: 'mac 模型' },
    { key: 'IPAD', value: 'ipad', label: 'ipad 模型' },
    { key: 'IPHONE', value: 'iphone', label: 'iphone 模型' },
    { key: 'IMAC', value: 'imac', label: 'imac 模型' },
    { key: 'MORE', value: 'more', label: '多设备模型' },
  ] as const,
  'MOCUKUP_TYPE'
)
