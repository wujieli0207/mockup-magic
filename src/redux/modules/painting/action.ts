import { IMockupInstance } from '#/painting'
import { SET_MOCKUP_INSTANCE } from '@/redux/mutation-types'

export const setMockupInstance = (mockupInstance: IMockupInstance) => {
  return {
    type: SET_MOCKUP_INSTANCE,
    mockupInstance,
  }
}
