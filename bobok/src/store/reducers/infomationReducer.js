import {
    FETCH_CATEGORIES_BY_ID_SUCCESS,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_INFORMATION_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS
} from "../actons/actionsType";


const initialState = {
    information: [],
    categories: [],
    category: null,
    registerError: null,
    loginError: null,
    user: null
};

const informationReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_INFORMATION_SUCCESS:
          return {...state, information: action.information};

      case FETCH_CATEGORIES_SUCCESS:
          return {...state, categories: action.categories};

      case FETCH_CATEGORIES_BY_ID_SUCCESS:
          return {...state, category: action.category};

      case REGISTER_USER_SUCCESS:
          return {...state, registerError: null, user: action.user};

      case REGISTER_USER_FAILURE:
          return {...state, registerError: action.error};

      case LOGIN_USER_SUCCESS:
          return {...state, user: action.user, loginError: null};

      case LOGIN_USER_FAILURE:
          return {...state, loginError: action.error};

      case LOGOUT_USER:
          return {...state, user: null};
      default: {
          return state;
      }
  }
};

export default informationReducer;