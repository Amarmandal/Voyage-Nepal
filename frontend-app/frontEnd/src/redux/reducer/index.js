import {combineReducers} from 'redux'
import loginUser from './loginUser'
import authReducer from './registerUser'
import resetOtp from './resetOtp'
import userEmail from './userEmail'

export default combineReducers({
    loginUser,
    authReducer,
    resetOtp,
    userEmail
})