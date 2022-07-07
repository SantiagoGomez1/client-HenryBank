import { GET_USERS, GET_USER } from "../actions/index";

const initialState = {
  users: [],
  user: {}
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
        user: action.payload.find(user => user.id === 1),
      };

    default:
      return state;
  }
};

export default rootReducer;
