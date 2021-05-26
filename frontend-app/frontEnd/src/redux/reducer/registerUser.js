import {REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../action/action.types'

const initialState = {
    user: {},
    errors: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return{...state, user: action.payload}
        // case REGISTER_USER_FAIL:
        //     return{...state, errors: action.payload}
        default:
             return state;
    }
}

export default authReducer