import axios from '../../axios-api';
import {FETCH_INFORMATION_SUCCESS} from "./ActionsTypes";

const fetchGardensSuccess = information => {
    return (
        {type: FETCH_INFORMATION_SUCCESS, information}
    )
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
