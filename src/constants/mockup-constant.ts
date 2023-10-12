import { defineConstants } from '@/utils/defineConstants'

/**
 * @description 模型分类
 */
export const { MOCUKUP_TYPE_KV, MOCUKUP_TYPE_VL } = defineConstants(
  [
    { key: 'MAC_BOOK', value: 'macBook', label: 'Macbook' },
    { key: 'IPAD', value: 'ipad', label: 'iPad' },
    { key: 'IPHONE', value: 'iphone', label: 'iPhone' },
    { key: 'IMAC', value: 'imac', label: 'iMac' },
    { key: 'MORE', value: 'more', label: '多设备模型' },
  ] as const,
  'MOCUKUP_TYPE'
)
