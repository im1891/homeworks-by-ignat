import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore, Store} from "redux";

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,
})

const store: Store<AppStateType> = createStore(reducers)

export default store

// @ts-ignore
window.store = store // for dev
