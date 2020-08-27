/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'

export default combineReducers({
    auth: AuthReducer
})