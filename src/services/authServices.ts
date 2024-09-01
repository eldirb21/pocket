import {endpoint, api} from '@helpers';

const login = (data: any) => {
  return api.post(endpoint.login, data, false);
};

const tokenRefresh = (data: any) => {
  return api.post(endpoint.tokenRefresh, data);
};

const forgotPassword = (data: any) => {
  return api.post(endpoint.forgotPassword, data);
};

const resetPassword = (data: any, token: any) => {
  return api.post(endpoint.resetPassword(token), data);
};

const register = (data: any) => {
  return api.post(endpoint.register, data, false);
};
const editProfile = (data: any) => {
  return api.post(endpoint.editProfile, data);
};

const changePassword = (data: any) => {
  return api.post(endpoint.changePassword, data);
};

const myProfile = (payload: any) => {
  return api.get(endpoint.myProfile(payload));
};
const AuthService = {
  login,
  tokenRefresh,
  forgotPassword,
  resetPassword,
  register,
  editProfile,
  changePassword,
  myProfile,
};

export default AuthService;
