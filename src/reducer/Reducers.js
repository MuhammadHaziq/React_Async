
import { GET_USERS, GET_USERS_STARTED, GET_USER_DETAIL } from '../action/actionTypes'

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  data: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_STARTED:
      console.log("// GET_USERS ACTION  //");
      return {  ...state, isLoading: true };
    case GET_USERS:
      console.log("// GET_USERS ACTION FIRED //");
      return {  ...state, isLoading: false, users: action.payload };

      case GET_USER_DETAIL:
      console.log("//Specific User Detail ");
      console.log( action.payload);
      return { ...state , isLoading: false, data: action.payload };

    default:
      return state;
  }
};

export default reducer;
