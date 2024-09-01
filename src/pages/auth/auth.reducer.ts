import * as _ from './auth.types';

const initialState = {
  loading: false,
  logon: null,
  error: null,
};

export default (state = initialState, actions: any) => {
  switch (actions.type) {
    case _.REGIST:
      return {
        ...state,
        loading: actions.load,
        logon: actions.payload,
        error: actions.error?.errors,
      };
    case _.LOGIN:
      return {
        ...state,
        loading: actions.load,
        logon: actions.payload,
        error: actions.error?.errors,
      };
    default:
      return state;
  }
};
