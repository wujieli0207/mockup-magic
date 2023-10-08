import mockupList from '@/components/Mockup'
import type { IMockupComponent } from '#/mockup'

/**
 * @description 点击使用按钮，使用当前模型
 */
export function handleClickUseBtn(key: IMockupComponent['key']) {
  const selectMockup = mockupList.find((item) => item.key === key)
  console.log('selectMockup: ', selectMockup)
}
