import * as _ from './budget.types';

const initialState = {
  loading: false,
  budget: [],
  budgetDetail: null,
  actionBudget: null,
  error: null,
};

export default (state = initialState, actions: any) => {
  switch (actions.type) {
    case _.GET_LIST:
      return {
        ...state,
        loading: actions.load,
        budget: actions.payload || [],
        error: actions.error?.errors || null,
      };
    case _.GET_SINGLE:
      return {
        ...state,
        loading: actions.load,
        budgetDetail: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.ADD_BUDGET:
      return {
        ...state,
        loading: actions.load,
        actionBudget: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.EDIT_BUDGET:
      return {
        ...state,
        loading: actions.load,
        actionBudget: actions.payload || null,
        error: actions.error?.errors || null,
      };
    case _.DELETE_BUDGET:
      return {
        ...state,
        loading: actions.load,
        actionBudget: actions.payload || null,
        error: actions.error?.errors || null,
      };
    default:
      return state;
  }
};
