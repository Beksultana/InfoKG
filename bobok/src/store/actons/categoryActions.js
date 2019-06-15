import axios from '../../axios-api';
import {FETCH_CATEGORIES_SUCCESS} from "./ActionsTypes";

const fetchCategoriesSuccess = categories => {
    return (
        {type: FETCH_CATEGORIES_SUCCESS, categories}
    )
};

export const fetchCategories = () => {
  return dispatch => {
      return axios.get('/category').then(
          response => {
              dispatch(fetchCategoriesSuccess(response.data))
          }
      )
  }
};