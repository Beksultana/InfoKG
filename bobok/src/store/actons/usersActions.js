import axios from '../../axios-api';
import {REGISTER_USERS_SUCCESS, LOGIN_USER_SUCCESS} from "./ActionsTypes";
import {NotificationManager} from 'react-notifications';
import {push} from "connected-react-router";

const registerUsersSuccess = user => ({type: REGISTER_USERS_SUCCESS, user});
const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});

export const registerUser = usersData => {
    return dispatch => {
        return axios.post('/users', usersData).then(
            response => {
                console.log(response.date);
                dispatch(registerUsersSuccess(response.data.user));
                dispatch(push('/'));
                NotificationManager.success("Сиз ийгиликтуу катталдыныз!");
            },
            error => {
                NotificationManager.error('Мындай логин катталган!')
            }
        )
    }
};

export const loginUser = userData => {
    return (dispatch) => {
        return axios.post('/users/sessions', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user));
                NotificationManager.success("Куш келипсиз!");
                dispatch(push('/'))
            },
            error => {
                NotificationManager.error('Мындай логин жок!')
            })
    }
};