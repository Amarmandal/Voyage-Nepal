import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import { sidebarReducers } from "./reducers/sidebarReducers";

import { createPlaceReducer } from "./reducers/placeReducers";
import { createCategoryReducer } from "./reducers/categoryReducers";
// import { createStayPlaceReducer } from "./reducers/stayPlaceReducers";

import { getCategoryReducer } from "./reducers/categoryReducers";
import { getHotelReducer} from "./reducers/stayPlaceReducers";
import { countReducers } from "./reducers/countReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  createPlace: createPlaceReducer,
  createCategory: createCategoryReducer,
  // createStayPlace: createStayPlaceReducer,
  sidebarToggle: sidebarReducers,
  categoryList: getCategoryReducer,
  hotelList: getHotelReducer,
  docsCount: countReducers,
});

const userInfo = localStorage.getItem('userInfo');
const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null; 

const initialState = {
  userLogin: { 'userInfo': userInfoFromStorage },
  createPlace: {},
  createCategory: {},
  // createStayPlace: {},
  categoryList: null,
  hotelList: null,
  docsCount: {},
  sidebarToggle: {
    placeToggle: false,
    categoryToggle: false,
    hotelToggle: false,
    userToggle: false,
  },
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
