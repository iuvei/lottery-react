import { createStore,combineReducers } from 'redux'
import Reducers from './reducers'
export default createStore(combineReducers(Reducers))