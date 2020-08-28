/* eslint-disable prettier/prettier */
import { EMAIL_CHANGED, PASSSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types'

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null 
    }

export default (state = INITIAL_STATE, action) => {
    console.log(action)

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSSWORD_CHANGED:
            return { ...state, password: action.paylaod }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload }
        default :
        return state
    }
}