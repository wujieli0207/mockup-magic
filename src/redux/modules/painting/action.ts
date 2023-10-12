import { IFrameInstance, IMockupInstance } from '#/painting'
import { SET_FRAME_INSTANCE, SET_MOCKUP_INSTANCE } from '@/redux/mutation-types'

export const setMockupInstance = (mockupInstance: IMockupInstance) => {
  return {
    type: SET_MOCKUP_INSTANCE,
    mockupInstance,
  }
}

export const setFrameInstance = (frameInstance: IFrameInstance) => {
  return {
    type: SET_FRAME_INSTANCE,
    frameInstance,
  }
}
