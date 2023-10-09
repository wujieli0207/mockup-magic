import { IPaintingState } from '@/redux/interface'
import { SET_PAINTING_INSTANCE } from '@/redux/mutation-types'
import { produce } from 'immer'
import { AnyAction } from 'redux'

const paintingState: IPaintingState = {
  paintingInstance: {},
}

const painting = (state: IPaintingState = paintingState, action: AnyAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case SET_PAINTING_INSTANCE:
        draftState.paintingInstance = action.paintingInstance
        break
      default:
        return draftState
    }
  })
}

export default painting
