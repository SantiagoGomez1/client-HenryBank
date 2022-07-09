const axios = require("axios");
import { dataa } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const LOG_IN = "LOG_IN";

export const POST_USER_DATA = "POST_USER_DATA";

export const GET_COINS = "GET_COINS";
export const SEARCH_COINS = "SEARCH_COINS";

//------------Config with token ---------------------------

const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11bmRvMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGVRcWFlRjhCLzZ3eWU2SE5VcmhzYmVYOEZ5Uk45dFhweUcuenRKUFVzNGx4S2R5QWRZR0IuIiwiaWF0IjoxNjU3MzgwNzE1LCJleHAiOjE2NTc0NjcxMTV9.jVT958aADKRQ4J7onwH93F2B0R-IZ-Cjk0L5J-rR6D8",
  },
};

//---------------------------------------------------------

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

export const postUserData = (payload) => {
  return async function (dispatch) {
    const posteo = {
      name: payload.name,
      lastName: payload.lastName,
      identity: payload.identity,
      gender: payload.gender,
      dateOfBirth: payload.dateOfBirth,
      city: payload.city,
      nationality: payload.nationality,
      address: payload.address,
    };
    console.log("Aca hay un posteo", posteo);
    const created = await axios.post("http://localhost:3001/register", posteo);
    return dispatch({
      type: "POST_USER_DATA",
      payload: created.data,
    });
  };
};

export const getCoins = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/crypto", config);
  dispatch({ type: GET_COINS, payload: response.data });
};

export function searchCoins(name) {
  return { type: SEARCH_COINS, payload: name };
}
