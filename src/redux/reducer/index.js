import {
  GET_USERS,
  GET_USER,
  LOG_IN,
  POST_USER_DATA,
  POST_USER,
  POST_USER_RENDER,
  RENDER_SCREEN,
  GET_COINS,
  SEARCH_COINS,
  GET_COIN_ID,
  GET_USER_DETAIL,
  GET_NEWS,
  PRICES_CHARTS,
  GET_BALANCE,
  USER_TRANSFER,
  GET_ALL_USERS,
  GET_MY_USER,
  PUT_TRANSFER,
  SELL_CRYPTOS,
  RECHANGE,
  GET_COUNTRIES,
  GET_CITIES,
} from "../actions/index";

const initialState = {
  users: [],
  allUsers: [],
  myUser: {},
  user: {},
  logIn: {},
  renderScreen: 0,
  coins: [],
  coinDetail: {},
  userMP: [],
  userData: [],
  userDetail: {},
  news: [],
  userTransfer: {},
  putTransfer: {},
  charts: [],
  balance: [],
  countries: [],
  cities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.find((user) => user.id === 3),
      };
    case GET_MY_USER:
      return {
        ...state,
        myUser: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        logIn: action.payload,
      };
    case RENDER_SCREEN:
      return {
        ...state,
        renderScreen: action.payload,
      };
    case POST_USER_DATA:
      return {
        ...state,
      };
    case POST_USER:
      return {
        ...state,
        userMP: action.payload,
      };
    case POST_USER_RENDER:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case SEARCH_COINS:
      const coinSearch = state.coins.filter((element) =>
        element.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        coins: coinSearch,
      };
    case GET_COIN_ID:
      const coinDetailSearch = state.coins.find(
        (element) => element.id === action.payload
      );
      return {
        ...state,
        coinDetail: coinDetailSearch,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case USER_TRANSFER:
      return {
        ...state,
        userTransfer: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case PUT_TRANSFER:
      return {
        ...state,
        putTransfer: action.payload,
      };
    case SELL_CRYPTOS:
      return {
        ...state,
      };
    case PRICES_CHARTS:
      return {
        ...state,
        charts: action.payload,
      };
    case RECHANGE:
      return {
        ...state,
      };
    case GET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.map((el) => el.country_name),
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload.map((el) => el.state_name),
      };
    default:
      return state;
  }
};

export default rootReducer;
