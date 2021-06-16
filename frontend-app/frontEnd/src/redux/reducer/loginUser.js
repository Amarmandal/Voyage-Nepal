import {LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_DETAILS} from '../action/action.types'

const initialState = {
    user: {},
    errors: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return{...state, user: action.payload}
        case LOGIN_USER_FAIL:
            return{...state, errors: action.payload}

        default: 
        return state;

    }
}