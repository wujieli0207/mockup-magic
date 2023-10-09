import mockupList from '@/components/Mockup'
import { store } from '@/redux'
import { setPaintingInstance } from '@/redux/modules/painting/action'
import type { IMockupComponent } from '#/mockup'

/**
 * @description 点击使用按钮，使用当前模型
 */
export function handleClickUseBtn(key: IMockupComponent['key']) {
  const selectMockup = mockupList.find((item) => item.key === key)

  store.dispatch(
    setPaintingInstance({
      _vid: '1',
      mockup: '2',
      imageUrl: [''],
    })
  )
  console.log('selectMockup: ', selectMockup)
}
