import {AuthService} from '@services';
import * as _ from './profile.types';
import {dispatchLoad, dispatchSuccess, dispatchError} from '@helpers';

const getProfile = () => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_PROFILE, null);
  const res: any = await AuthService.myProfile();

  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_PROFILE, res?.data);
  } else {
    dispatchError(dispatch, _.GET_PROFILE, res);
  }
};

const resetActions = () => (dispatch: any) => {
  dispatchError(dispatch, _.EDIT_PROFILE, '');
  dispatchSuccess(dispatch, _.EDIT_PROFILE, '');
};

const editProfile = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.EDIT_PROFILE, null);
  const res: any = await AuthService.editProfile(obj);

  if (res.status === 201) {
    dispatchSuccess(dispatch, _.EDIT_PROFILE, res);
  } else {
    dispatchError(dispatch, _.EDIT_PROFILE, res);
  }
};
// const doLogon = (obj: any) => async (dispatch: any) => {
//   dispatchLoad(dispatch, _.LOGIN, []);
//   const res: any = await AuthService.login(obj);
//   setTimeout(() => {
//     if (res.status === 200) {
//       dispatchSuccess(dispatch, _.LOGIN, res);
//     } else {
//       dispatchError(dispatch, _.LOGIN, res);
//     }
//   }, 1000);
// };

export {getProfile, editProfile, resetActions};
