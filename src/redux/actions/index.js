// import axios from "axios";
import { data } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

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
