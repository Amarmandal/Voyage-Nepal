import {RESET_PASSWORD, RESET_PASSWORD_FAIL} from '../action/action.types'

const initialState = {
    resetID: '',
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD:
            return{...state, resetID: action.payload}
        case RESET_PASSWORD_FAIL:
            return{...state, errors: action.payload}

        default: 
        return state;

    }
}