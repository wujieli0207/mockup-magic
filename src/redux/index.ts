import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
  Store,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import storage from 'redux-persist/lib/storage'
import painting from './modules/painting/reducer'
import { IPaintingState } from './interface'

export interface IReduxState {
  painting: IPaintingState
}

// 创建reducer(拆分reducer)
const reducer = combineReducers({
  painting,
})

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage,
}

const persistReducerConfig = persistReducer(persistConfig, reducer)

// 开启 redux-devtools
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)

// 创建 store
const store: Store = createStore(
  persistReducerConfig,
  composeEnhancers(middleWares)
)

// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
