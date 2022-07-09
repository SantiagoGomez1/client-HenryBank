import axios from "axios";
import { data } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const LOG_IN = "LOG_IN";
export const POST_USER_DATA = 'POST_USER_DATA';

export const logIn = (form) => async (dispatch) => {
  console.log(form);
  const response = await axios.post(`http://localhost:3001/login`, form);
  const payload = await response.data;
  return dispatch({ type: LOG_IN, payload });
};

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: data,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export  const postUserData = (payload) => {
  return async function (dispatch){
    const posteo = {
      "name": payload.name,
      "lastName": payload.lastName,
      "identity": payload.identity,
      "gender": payload.gender,
      "dateOfBirth": payload.dateOfBirth,
      "city": payload.city,
      "nationality": payload.nationality,
      "address": payload.address,
    }
 console.log(posteo);
      const created = await axios.post('http://localhost:3001/register',posteo); 
      return dispatch({
          type : 'POST_USER_DATA',
          payload: created.data,
      })
  }
};