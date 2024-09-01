import {AuthService} from '@services';
import * as _ from './auth.types';
import {dispatchLoad, dispatchSuccess, dispatchError} from '@helpers';

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
  setTimeout(() => {
    if (res.status === 200) {
      dispatchSuccess(dispatch, _.LOGIN, res);
    } else {
      dispatchError(dispatch, _.LOGIN, res);
    }
  }, 1000);
};

export {register, doLogon};
