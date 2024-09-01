import * as _ from './transaction.types';

const initialState = {
  loading: false,
  transactions: [],
  transactionDetail: null,
  actionTransaction: null,
  error: null,
};

export default (state = initialState, actions: any) => {
  switch (actions.type) {
    case _.GET_LIST:
      return {
        ...state,
        loading: actions.load,
        transactions: actions.payload || [],
        error: actions.error?.errors || null,
      };
    case _.GET_SINGLE:
      return {
        ...state,
        loading: actions.load,
        transactionDetail: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.ADD_TRANSACTION:
      return {
        ...state,
        loading: actions.load,
        actionTransaction: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.EDIT_TRANSACTION:
      return {
        ...state,
        loading: actions.load,
        actionTransaction: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.DELETE_TRANSACTION:
      return {
        ...state,
        loading: actions.load,
        actionTransaction: actions.payload || null,
        error: actions.error?.errors || null,
      };
    default:
      return state;
  }
};
