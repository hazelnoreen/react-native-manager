/* eslint-disable prettier/prettier */
import { EMAIL_CHANGED, PASSSWORD_CHANGED } from '../actions/types'

const INITIAL_STATE = { 
    email: '',
    password: '' 
    }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSSWORD_CHANGED:
            return { ...state, password: action.paylaod }
        default :
        return state
    }
}