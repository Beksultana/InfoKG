import axios from '../../axios-api';
import {FETCH_CATEGORIES_SUCCESS} from "./actionsType";


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

export const createCategory = category => {
    return dispatch => {
        return axios.post('/category', category);
    }
};

export const deleteCategory = categoryId => {
    return dispatch => {
        return axios.delete('/category/' + categoryId).then(
            dispatch(fetchCategories())
        )
    }
};