import {REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../action/action.types'

const initialState = {
    success: {},
    errors: {}
}

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return{success: action.payload}
        case REGISTER_USER_FAIL:
            return{errors: action.payload}
        default:
             return state;
    }
}

export default authReducer