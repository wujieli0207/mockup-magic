import { IPaintingState } from '@/redux/interface'
import { SET_MOCKUP_INSTANCE } from '@/redux/mutation-types'
import { produce } from 'immer'
import { AnyAction } from 'redux'

const paintingState: IPaintingState = {
  mockupInstance: {},
}

const painting = (state: IPaintingState = paintingState, action: AnyAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case SET_MOCKUP_INSTANCE:
        draftState.mockupInstance = action.mockupInstance
        break
      default:
        return draftState
    }
  })
}

export default painting
