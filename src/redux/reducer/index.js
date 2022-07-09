import { GET_USERS, GET_USER, LOG_IN, RENDER_SCREEN } from "../actions/index";

const initialState = {
  users: [],
  user: {},
  logIn: {},
  renderScreen:0,
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
    default:
      return state;
  }
};

export default rootReducer;
