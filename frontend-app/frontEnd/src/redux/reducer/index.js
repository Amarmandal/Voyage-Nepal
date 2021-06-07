import {combineReducers} from 'redux'
import loginUser from './loginUser'
import authReducer from './registerUser'
import resetOtp from './resetOtp'
import userEmail from './userEmail'
import userDetails from './userDetails'
export default combineReducers({
    loginUser,
    authReducer,
    resetOtp,
    userEmail,
    userDetails
})