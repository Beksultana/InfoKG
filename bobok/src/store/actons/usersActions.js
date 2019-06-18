import axios from '../../axios-api';
import {CREATE_USERS_SUCCESS} from "./ActionsTypes";

const createUsersSuccess = users => ({type: CREATE_USERS_SUCCESS, users});
