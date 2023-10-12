import { IFrameInstance, IMockupInstance } from '#/painting'

export interface IPaintingState {
  mockupInstance: Partial<IMockupInstance>
  frameInstance: Partial<IFrameInstance>
}
