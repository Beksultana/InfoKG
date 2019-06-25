import axios from '../../axios-api';
import {CREATE_INFORMATION_SUCCESS, FETCH_INFORMATION_SUCCESS} from "./actionsType";


const fetchGardensSuccess = information => ({type: FETCH_INFORMATION_SUCCESS, information});
const createInformationSuccess = () => ({type: CREATE_INFORMATION_SUCCESS});

export const createInformation = informationData => {
  return dispatch => {
      return axios.post('/information', informationData).then(
          () => {
              dispatch(createInformationSuccess())
          }
      )
  }
};

export const fetchInformation = (categoryId) => {
    return dispatch => {

        let path = '/information';

        if (categoryId) {
            path += '?categories=' + categoryId
        }

        return axios.get(path).then(
            response => {
                dispatch(fetchGardensSuccess(response.data))
            }
        )
    };
};

export const deleteInfo = id => {
    return async dispatch => {
        await axios.delete('/information/' +id);
        await dispatch(fetchInformation());
    }
};
