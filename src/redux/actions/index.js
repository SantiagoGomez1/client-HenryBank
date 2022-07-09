const axios = require("axios");
import { dataa } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const LOG_IN = "LOG_IN";

export const logIn = (form) => async (dispatch) => {
  console.log(form);
  const response = await axios.post("http://localhost:3001/login", form);
  const payload = await response.data;
  console.log(payload);
  return dispatch({ type: LOG_IN, payload });
};

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: dataa,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: dataa,
  };
};
