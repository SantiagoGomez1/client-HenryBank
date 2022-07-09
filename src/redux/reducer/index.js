
import { GET_USERS, GET_USER, LOG_IN, POST_USER_DATA} from "../actions/index";

import { GET_COINS } from "../actions/index";


const initialState = {
  users: [],
  user: {},
  logIn: {},
  coins: [],
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

    case POST_USER_DATA:
      return {
        ...state,
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
