const axios = require("axios");
import { dataa } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const LOG_IN = "LOG_IN";

export const POST_USER_DATA = "POST_USER_DATA";
export const POST_USER = "POST_USER";
export const POST_USER_RENDER = "POST_USER_RENDER";

export const GET_COINS = "GET_COINS";
export const SEARCH_COINS = "SEARCH_COINS";
export const GET_COIN_ID = "GET_COIN_ID";

//------------Config with token ---------------------------

const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvY28ucGVyZXpAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkNXVmU2xvRWtHWTdya2FKdVl6ZXpDZTUuSXQyQnJZYjRvSFY4bGJMYUVyMVY1N21adGguNW0iLCJpYXQiOjE2NTczODk5MDEsImV4cCI6MTY1NzU2MjcwMX0.5AFPG-mYPkbborveIuNFIxgt2U9vmhe005RSz7hS37w",
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

export const postUserData = (payload, userMP) => {
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
      email: userMP.email,
      password: userMP.password,
    };
    console.log("Aca hay un posteo", posteo);
    const created = await axios.post("http://localhost:3001/register", posteo);
    return dispatch({
      type: "POST_USER_DATA",
      payload: created.data,
    });
  };
};

export const postUserDataCard = (payload, userMP) => {
  return async function (dispatch) {
    const posteo2 = {
      name: payload.name,
      lastName: payload.lastName,
      identity: payload.identity,
      gender: payload.gender,
      dateOfBirth: payload.dateOfBirth,
      city: payload.city,
      nationality: payload.nationality,
      address: payload.address,
      email: userMP.email,
      password: userMP.password,
    };
    console.log("Aca hay un posteo2", posteo2);
    return dispatch({
      type: "POST_USER_RENDER",
      payload,
    });
  };
};

export const postUser = (payload) => {
  return async function (dispatch) {
    const post = {
      email: payload.email,
      password: payload.password,
    };
    return dispatch({
      type: "POST_USER",
      payload,
    });
  };
};

export const getCoins = () => async (dispatch) => {
  const response = await axios.get(
    "https://h-bank-deploy.herokuapp.com/crypto",
    config
  );
  dispatch({ type: GET_COINS, payload: response.data });
};

export function searchCoins(name) {
  return { type: SEARCH_COINS, payload: name };
}

export function getCoinId(id) {
  return { type: GET_COIN_ID, payload: id };
}
