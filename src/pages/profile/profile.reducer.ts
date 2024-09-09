import * as _ from './profile.types';

const initialState = {
  loading: false,
  profile: null,
  profileStatus: null,
  error: null,
};

export default (state = initialState, actions: any) => {
  switch (actions.type) {
    case _.GET_PROFILE:
      return {
        ...state,
        loading: actions.load,
        profile: actions.payload,
      };

    case _.EDIT_PROFILE:
      return {
        ...state,
        loading: actions.load,
        profileStatus: actions.payload,
        error: actions.error || null,
      };
    default:
      return state;
  }
};
