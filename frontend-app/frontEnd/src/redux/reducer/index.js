import {combineReducers} from 'redux'
import loginUser from './loginUser'
import authReducer from './registerUser'
import resetOtp from './resetOtp'

export default combineReducers({
    loginUser,
    authReducer,
    resetOtp
})