import {REVIEW, REVIEW_SUCCESS, REVIEW_FAIL} from '../../action/action.types'
 
const initialState = {
    loading: true,
    success: '',
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REVIEW:
            return{...state, loading: true}
        case REVIEW_SUCCESS:
            return{...state, loading: false, success: action.payload, error: {}}
        case REVIEW_FAIL:
            return{...state, loading: false, error: action.payload}
    
        default:
            return state
    }
} 