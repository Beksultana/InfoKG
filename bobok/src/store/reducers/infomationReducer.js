import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_INFORMATION_SUCCESS,
    LOGIN_USER_SUCCESS,
    REGISTER_USERS_SUCCESS
} from "../actons/ActionsTypes";

const initialState = {
    information: [],
    categories: [],
    registerError: null,
    loginError: null,
    user: null
};

const infomationReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_INFORMATION_SUCCESS:
          return {...state, information: action.information};
      case FETCH_CATEGORIES_SUCCESS:
          return {...state, categories: action.categories};
      case REGISTER_USERS_SUCCESS:
          return {...state, user: action.user};
      case LOGIN_USER_SUCCESS:
          return {...state, user: action.user};
      default: {
          return state;
      }
  }
};

export default infomationReducer;