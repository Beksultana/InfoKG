import {FETCH_CATEGORIES_SUCCESS, FETCH_INFORMATION_SUCCESS} from "../actons/ActionsTypes";

const initialState = {
    information: [],
    categories: []
};

const infomationReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_INFORMATION_SUCCESS:
          return {...state, information: action.information};
      case FETCH_CATEGORIES_SUCCESS:
          return {...state, categories: action.categories};
      default: {
          return state;
      }
  }
};

export default infomationReducer;