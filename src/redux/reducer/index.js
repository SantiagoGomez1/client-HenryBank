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
  SET_TRANSFER,
  SET_TRANSFER_ALIAS,
  USER_TRANSFER_ALIAS,
  GET_MOVEMENTS,
  DETAIL_MOVEMENTS,
  CLEAR_LOGIN,
  POST_LOCKED_STAKE,
  SEARCH_USER,
  FORGOT_A,
  FORGOT_PASSWORD,
  CLEAR_FORGOT,
  POST_CONTACTS,
  GET_CONTACTS,
  CONTACT_SELECT,
  GET_CRYPTOS_HISTORIAL,
  GET_LOCKEDSTAKE_HISTORIAL,
  GET_TRANSACTIONS_HISTORIAL,
  USER_TO_ADMIN,
  ADMIN_TO_USER,
  BAN_USER,
  DISBAN_USER,
  PAYMENT,
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
  movements: {},
  detailMovements: [],
  lockedStake: [],
  allUsersSearch: [],
  forgotA: [],
  forgotPassword: {},
  addContacts: [],
  contacts: [],
  historial: [],
  userToAdmin: {},
  adminToUser: {},
  banUser: {},
  disbanUser: {},
  payment: [],
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
        allUsersSearch: action.payload,
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
    case SET_TRANSFER:
      return {
        ...state,
        putTransfer: action.payload,
      };
    case SET_TRANSFER_ALIAS:
      return {
        ...state,
        putTransfer: action.payload,
      };
    case USER_TRANSFER:
      return {
        ...state,
        userTransfer: action.payload,
      };
    case USER_TRANSFER_ALIAS:
      return {
        ...state,
        userTransfer: action.payload,
      };
    case GET_MOVEMENTS:
      return {
        ...state,
        movements: action.payload,
      };
    case DETAIL_MOVEMENTS:
      return {
        ...state,
        detailMovements: action.payload,
      };
    case CLEAR_LOGIN:
      return {
        ...state,
        logIn: {},
      };
    case POST_LOCKED_STAKE:
      return {
        ...state,
        lockedStake: action.payload,
      };
    case SEARCH_USER:
      let array = action.payload;
      const info = array.filter((e) =>
        e.alias.toLowerCase().includes(action.input.toLowerCase())
      );
      return {
        ...state,
        allUsersSearch: info,
      };
    case FORGOT_A:
      return {
        ...state,
        forgotA: action.payload,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: action.payload,
      };
    case CLEAR_FORGOT:
      return {
        ...state,
        forgotPassword: [],
      };
    case CONTACT_SELECT:
      return {
        ...state,
        addContacts: action.payload,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CRYPTOS_HISTORIAL:
      return {
        ...state,
        historial: action.payload,
      };
    case GET_LOCKEDSTAKE_HISTORIAL:
      return {
        ...state,
        historial: action.payload,
      };
    case GET_TRANSACTIONS_HISTORIAL:
      return {
        ...state,
        historial: action.payload,
      };
    case USER_TO_ADMIN:
      return {
        ...state,
        userToAdmin: action.payload,
      };
    case ADMIN_TO_USER:
      return {
        ...state,
        adminToUser: action.payload,
      };
    case DISBAN_USER:
      return {
        ...state,
        disbanUser: action.payload,
      };
    case BAN_USER:
      return {
        ...state,
        banUser: action.payload,
      };
    case PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
