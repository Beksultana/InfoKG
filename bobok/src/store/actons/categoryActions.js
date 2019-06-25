import axios from '../../axios-api';
import  {push} from 'connected-react-router';
import {FETCH_CATEGORIES_BY_ID_SUCCESS, FETCH_CATEGORIES_SUCCESS} from "./actionsType";


const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});
const fetchCategoriesByIdSuccess = category => ({type: FETCH_CATEGORIES_BY_ID_SUCCESS, category});

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
    return async dispatch => {
        await axios.delete('/category/' + categoryId);
        await dispatch(fetchCategories())
    }
};

export const fetchCategoryById = id => {
    return dispatch => {
        return axios.get('/category/' + id).then(
            response => {
                dispatch(fetchCategoriesByIdSuccess(response.data))
            }
        )
    }
};

export const editCategory = (id, data) => {
    return dispatch => {
        return axios.put(`/category/${id}`, data).then(
            dispatch(push('/'))
        )
    }
};