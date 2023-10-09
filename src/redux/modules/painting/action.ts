import { IPaintingInstance } from '#/painting'
import { SET_PAINTING_INSTANCE } from '@/redux/mutation-types'

export const setPaintingInstance = (paintingInstance: IPaintingInstance) => {
  return {
    type: SET_PAINTING_INSTANCE,
    paintingInstance,
  }
}
