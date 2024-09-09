import {AuthService} from '@services';
import * as _ from './auth.types';
import {dispatchLoad, dispatchSuccess, dispatchError} from '@helpers';
import {localstore} from '@utils';

const register = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.REGIST, []);
  const res: any = await AuthService.register(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.REGIST, res);
  } else {
    dispatchError(dispatch, _.REGIST, res);
  }
};
const doLogon = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.LOGIN, []);
  const res: any = await AuthService.login(obj);
  setTimeout(async () => {
    if (res.status === 200) {
      dispatchSuccess(dispatch, _.LOGIN, res);
      await localstore.postStore('token', res?.data?.accessToken);
      await localstore.postStore('refresh_token', res?.data?.refreshToken);
    } else {
      dispatchError(dispatch, _.LOGIN, res);
    }
  }, 1000);
};
const doLogout = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.LOGOUT, null);
  const res: any = await AuthService.logout(obj);
  console.log('res', res);
  
  setTimeout(async () => {
    // if (res.status === 200) {
      dispatchSuccess(dispatch, _.LOGOUT, res);
      await localstore.deleteStore('token');
      await localstore.deleteStore('refresh_token');
    // } else {
    //   dispatchError(dispatch, _.LOGOUT, res);
    // }
  }, 200);
};

export {register, doLogon, doLogout};
