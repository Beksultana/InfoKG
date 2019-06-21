import axios from '../../axios-api';
import {CREATE_INFORMATION_SUCCESS, FETCH_INFORMATION_SUCCESS} from "./ActionsTypes";

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
            path += '?category=' + categoryId
        }

        return axios.get(path).then(
            response => {
                dispatch(fetchGardensSuccess(response.data))
            }
        )
    };
};
