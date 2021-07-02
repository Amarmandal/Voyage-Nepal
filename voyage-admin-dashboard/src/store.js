import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer, userListReducer } from "./reducers/userReducers";
import { sidebarReducers } from "./reducers/sidebarReducers";

import { createPlaceReducer, placeListReducer } from "./reducers/placeReducers";
import { createCategoryReducer, categoryListReducer } from "./reducers/categoryReducers";
import { overviewReducers } from "./reducers/overviewReducers.js";
// import { createStayPlaceReducer } from "./reducers/stayPlaceReducers";

import { getCategoryReducer } from "./reducers/categoryReducers";
import { getHotelReducer} from "./reducers/stayPlaceReducers";
import { countReducers } from "./reducers/countReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  placeList: placeListReducer,
  categoryList: categoryListReducer,
  createPlace: createPlaceReducer,
  createCategory: createCategoryReducer,
  // createStayPlace: createStayPlaceReducer,
  sidebarToggle: sidebarReducers,
  overviewToggle: overviewReducers,
  placeCategory: getCategoryReducer,
  placeHotel: getHotelReducer,
  docsCount: countReducers,
});

const userInfo = localStorage.getItem('userInfo');
const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null; 

const initialState = {
  userLogin: { 'userInfo': userInfoFromStorage },
  userRegister: {},
  userList: {},
  placeList: {},
  categoryList: {},
  createPlace: {},
  createCategory: {},
  placeCategory: null,
  placeHotel: null,
  docsCount: {},
  sidebarToggle: {
    placeToggle: false,
    categoryToggle: false,
    hotelToggle: false,
    userToggle: false,
  },
  overviewToggle: {
    showUser: true,
  }
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
