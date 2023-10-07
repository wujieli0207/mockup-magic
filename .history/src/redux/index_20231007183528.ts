import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
  Store,
} from 'redux'
import storage from 'redux-persist/lib/storage'

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage,
}

const persistReducerConfig = persistReducer(persistConfig, reducer)
