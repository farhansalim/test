import { LOGIN_SUCCESS } from '../../actions/ActionTypes'

const initialState = {
  token: null,

};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      var loginData = action.payload;
      return {
        ...state,
        token: loginData,
      };
    default:
      return state;
  }
};

export default AuthReducer;