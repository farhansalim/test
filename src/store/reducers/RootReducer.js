import { combineReducers } from 'redux'
import HomeReducer from './Home/HomeReducer'
import AuthReducer from './../reducers/Auth/AuthReducer'
import { SIGNOUT_SUCCESS } from '../actions/ActionTypes'

const appReducer = combineReducers({
  AuthReducer: AuthReducer,
  homeReducer: HomeReducer
});

const rootReducer = (state, action) => {
  if (action.type === SIGNOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};


export default rootReducer;
