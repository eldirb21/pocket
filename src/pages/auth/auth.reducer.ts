import * as _ from './auth.types';

const initialState = {
  loading: false,
  logon: null,
  logoutStatus: null,
  error: null,
};

export default (state = initialState, actions: any) => {
  switch (actions.type) {
    case _.REGIST:
      return {
        ...state,
        loading: actions.load,
        logon: actions.payload,
        error: actions.error?.errors || null,
      };
    case _.LOGIN:
      return {
        ...state,
        loading: actions.load,
        logon: actions.payload,
        error: actions.error?.errors || null,
      };
    case _.LOGOUT:
      return {
        ...state,
        loading: actions.load,
        logoutStatus: actions.payload,
        error: actions.error?.errors || null,
      };
    default:
      return state;
  }
};
