const axios = require("axios");
import { dataa } from "../../../response";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_MY_USER = "GET_MY_USER";
export const LOG_IN = "LOG_IN";
export const RENDER_SCREEN = "RENDER_SCREEN";
export const USER_TRANSFER = "USER_TRANSFER";
export const USER_TRANSFER_ALIAS = "USER_TRANSFER_ALIAS";

export const GET_NEWS = "GET_NEWS";
export const SET_TRANSFER = "SET_TRANSFER";

export const SET_TRANSFER_ALIAS = "SET_TRANSFER_ALIAS";
export const PUT_TRANSFER = "PUT_TRANSFER";
export const GET_MOVEMENTS = "GET_MOVEMENTS";

export const POST_USER_DATA = "POST_USER_DATA";
export const POST_USER = "POST_USER";
export const POST_USER_RENDER = "POST_USER_RENDER";

export const GET_COINS = "GET_COINS";
export const SEARCH_COINS = "SEARCH_COINS";
export const GET_COIN_ID = "GET_COIN_ID";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SELL_CRYPTOS = "SELL_CRYPTOS";
export const PRICES_CHARTS = "PRICES_CHARTS";
export const RECHANGE = "RECHANGE";
export const GET_BALANCE = "GET_BALANCE";
export const POST_LOCKED_STAKE = "POST_LOCKED_STAKE";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES = "GET_CITIES";

export const CLEAR_FORGOT = "CLEAR_FORGOT";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const SEARCH_USER = "SEARCH_USER";

export const FORGOT_A = "FORGOT_A";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

//------------------------------------------------------------------------------------------------//

export const logIn = (form) => async (dispatch) => {
  const response = await axios.post("https://h-bank.herokuapp.com/login", form);
  const payload = await response.data;
  return dispatch({ type: LOG_IN, payload });
};

//------------------------------------------------------------------------------------------------//

export const getAllUsers = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get("https://h-bank.herokuapp.com/user", config);
  dispatch({ type: GET_ALL_USERS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const getMyUser = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    "https://h-bank.herokuapp.com/user/profile",
    config
  );
  dispatch({ type: GET_MY_USER, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export function getUsers(token) {
  return async function (dispatch) {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(
      "https://h-bank.herokuapp.com/userEmail",
      config
    );

    return dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  };
}

//------------------------------------------------------------------------------------------------//

export const getUser = () => {
  return {
    type: GET_USER,
    payload: dataa,
  };
};

//------------------------------------------------------------------------------------------------//

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
    const created = await axios.post(
      "https://h-bank.herokuapp.com/register",
      posteo
    );
    return dispatch({
      type: "POST_USER_DATA",
      payload: created.data,
    });
  };
};

//------------------------------------------------------------------------------------------------//

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

//------------------------------------------------------------------------------------------------//

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

//------------------------------------------------------------------------------------------------//

export const renderScreen = (payload) => {
  return {
    type: RENDER_SCREEN,
    payload,
  };
};

//------------------------------------------------------------------------------------------------//

export const getCoins = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    "https://h-bank.herokuapp.com/crypto",
    config
  );
  dispatch({ type: GET_COINS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export function searchCoins(name) {
  return { type: SEARCH_COINS, payload: name };
}

//------------------------------------------------------------------------------------------------//

export function getCoinId(id) {
  return { type: GET_COIN_ID, payload: id };
}

//------------------------------------------------------------------------------------------------//

export const getUserDetail = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    "https://h-bank.herokuapp.com/user/profile",
    config
  );
  console.log(response.data);
  dispatch({ type: GET_USER_DETAIL, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const getNews = () => (dispatch) => {
  return fetch(
    "https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=a09836a597c24e2490cdcbcf5f32fb6c"
  )
    .then((response) => response.json())
    .then((news) => {
      dispatch({ type: GET_NEWS, payload: news.articles });
    });
};

//------------------------------------------------------------------------------------------------//

export const userTransfer = (payload) => {
  console.log("CBU", payload);
  return { type: USER_TRANSFER, payload: payload };
};

//------------------------------------------------------------------------------------------------//

export const userTransferAlias = (payload) => {
  console.log("ALIAS", payload);
  return { type: USER_TRANSFER_ALIAS, payload: payload };
};

//------------------------------------------------------------------------------------------------//

export const sellCryptos = (id, price, value, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const data = {
    amount: value,
    crypto: id,
    price,
  };
  const response = await axios.post(
    "https://h-bank.herokuapp.com/crypto/sell",
    data,
    config
  );
  console.log("Estado de la venta: ", response.data);
  dispatch({ type: SELL_CRYPTOS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const setTransfer = (token, cbu) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.post(
    "https://h-bank.herokuapp.com/search",
    cbu,
    config
  );
  console.log(response.data, "CORRECTO");
  dispatch({ type: SET_TRANSFER, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const setTransferAlias = (token, alias) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.post(
    "https://h-bank.herokuapp.com/search",
    alias,
    config
  );
  console.log(response.data, "CORRECTO");
  dispatch({ type: SET_TRANSFER_ALIAS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const pricesCharts = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    `https://h-bank.herokuapp.com/crypto/prices/${id}`,
    config
  );
  dispatch({ type: PRICES_CHARTS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const rechange = (amount, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.post(
    "https://h-bank.herokuapp.com/user/recharge",
    amount,
    config
  );
  const payload = await response.data;
  return dispatch({ type: RECHANGE, payload });
};

//------------------------------------------------------------------------------------------------//

export const getBalance = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    "https://h-bank.herokuapp.com/crypto/balance",
    config
  );
  dispatch({ type: GET_BALANCE, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const putTransfer = (token, amount) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  // console.log("TOKEN", token)
  // console.log("AMOUNT", amount)
  const response = await axios.put(
    "https://h-bank.herokuapp.com/search/tranfer",
    amount,
    config
  );
  dispatch({ type: PUT_TRANSFER, payload: response.data });

  // console.log("FINALIZADO")
};

//------------------------------------------------------------------------------------------------//

export function getCountries() {
  return async function (dispatch) {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJlbWFudWVsanVyaUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiIxcnlqUGkyajZhWXJvbWZYY3JPcl9RQzhfeXQ1TzRMTFRQbXFGUFN4bnN0dEtZSE84Z1EzU2g4SmE5SlpJUmVGanZrIn0sImV4cCI6MTY1ODI0MTM4OX0.q8NONbd-3J9tarfWf6HfxXUY60hTztOm6oc-1m0lceo",
      },
    };
    const res = await axios.get(
      "https://www.universal-tutorial.com/api/countries",
      config
    );
    // console.log("esto es la res paises", res.data);
    return dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  };
}

//------------------------------------------------------------------------------------------------//

export function getCities(value) {
  return async function (dispatch) {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJlbWFudWVsanVyaUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiIxcnlqUGkyajZhWXJvbWZYY3JPcl9RQzhfeXQ1TzRMTFRQbXFGUFN4bnN0dEtZSE84Z1EzU2g4SmE5SlpJUmVGanZrIn0sImV4cCI6MTY1ODI0MTM4OX0.q8NONbd-3J9tarfWf6HfxXUY60hTztOm6oc-1m0lceo",
      },
    };
    const res = await axios.get(
      `https://www.universal-tutorial.com/api/states/${value}`,
      config
    );
    // console.log("esto es la res ciudades", res.data);
    return dispatch({
      type: GET_CITIES,
      payload: res.data,
    });
  };
}

//------------------------------------------------------------------------------------------------//

export const getMovements = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    "https://h-bank.herokuapp.com/user/movements",
    config
  );
  dispatch({ type: GET_MOVEMENTS, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const cleanLogIn = (payload) => {
  return { type: CLEAR_LOGIN, payload };
};

//------------------------------------------------------------------------------------------------//

export const lockedStake = (token, mount) => async (dispatch) => {
  const info = {
    roi: "5%",
    parking: "5 minutes",
    deposit: mount.mountLockedStake,
  };
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.post(
    "https://h-bank.herokuapp.com/lockedStake",
    info,
    config
  );
  dispatch({ type: POST_LOCKED_STAKE, payload: response.data });
};

//------------------------------------------------------------------------------------------------//

export const searchUser = (token, input) => async (dispatch) => {
  console.log(input);
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get("https://h-bank.herokuapp.com/user", config);
  const info = response.data;
  console.log(info);
  dispatch({ type: SEARCH_USER, payload: info, input: input.user });
};

//------------------------------------------------------------------------------------------------//

export const forgotPassword =
  (email, identity, password) => async (dispatch) => {
    const data = {
      email: email,
      identity: identity,
      password: password,
    };
    console.log(data);
    const response = await axios.put(
      "https://h-bank.herokuapp.com/forgetPassword",
      data
    );
    const info = response.data;
    console.log(response.data);
    dispatch({ type: FORGOT_PASSWORD, payload: info });
  };

//------------------------------------------------------------------------------------------------//

export const forgotA = (payload) => {
  return { type: FORGOT_A, payload };
};

//------------------------------------------------------------------------------------------------//

export const clearForgot = (payload) => {
  return {
    type: CLEAR_FORGOT,
    payload,
  };
};
