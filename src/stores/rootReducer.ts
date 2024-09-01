import {combineReducers} from '@reduxjs/toolkit';

import authReducers from '../pages/auth/auth.reducer';
const appReducer = combineReducers({
  authReducers,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_REDUCER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
