import {combineReducers} from 'redux'
import loginUser from './loginUser'
import authReducer from './registerUser'
import resetOtp from './resetOtp'
import userEmail from './userEmail'
import userDetails from './userDetails'
import category from './category'
export default combineReducers({
    loginUser,
    authReducer,
    resetOtp,
    userEmail,
    userDetails,
    category
})