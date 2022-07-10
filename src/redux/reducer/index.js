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
} from "../actions/index";

const initialState = {
  users: [],
  user: {},
  logIn: {},
  renderScreen: 0,
  coins: [],
  coinDetail: {},
  userMP: [],
  userData: [],
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
    default:
      return state;
  }
};

export default rootReducer;
