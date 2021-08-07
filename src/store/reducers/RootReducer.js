import { combineReducers } from 'redux'
import HomeReducer from './Home/HomeReducer'

const appReducer = combineReducers({
homeReducer:HomeReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};


export default rootReducer;
