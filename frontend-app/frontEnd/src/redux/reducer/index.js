import {combineReducers} from 'redux'
import loginUser from './loginUser'
import authReducer from './registerUser'

export default combineReducers({
    loginUser,
    authReducer
})