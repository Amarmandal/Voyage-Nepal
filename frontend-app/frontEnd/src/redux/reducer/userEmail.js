import {USER_EMAIL} from '../action/action.types'

const initialState = {
    email: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_EMAIL:
            return{...state, email: action.payload}

        default: 
        return state;

    }
}