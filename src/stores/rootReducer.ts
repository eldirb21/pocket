import {combineReducers} from '@reduxjs/toolkit';

import authReducers from '../pages/auth/auth.reducer';
import transactionReducer from '@pages/transaction/transaction.reducer';
import budgetReducer from '@pages/budget/budget.reducer';
import profileReducer from '@pages/profile/profile.reducer';
const appReducer = combineReducers({
  authReducers,
  transactionReducer,
  budgetReducer,
  profileReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_REDUCER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
