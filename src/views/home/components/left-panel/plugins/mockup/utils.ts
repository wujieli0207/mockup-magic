import { nanoid } from 'nanoid'
import { store } from '@/redux'
import { setPaintingInstance } from '@/redux/modules/painting/action'
import type { IMockupComponent } from '#/mockup'

interface IGeneratePaintingInstanceParams {
  key: IMockupComponent['key']
  props: IMockupComponent['props']
}

/**
 * @description 点击使用按钮，使用当前模型
 */
export function handleGeneratePaintingInstance(
  params: IGeneratePaintingInstanceParams
) {
  const { key, props } = params

  store.dispatch(
    setPaintingInstance({
      _vid: nanoid(),
      mockupKey: key,
      imageUrl: [''],
      props,
    })
  )
}
