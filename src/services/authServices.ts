import {endpoint, api} from '@helpers';

const login = (data: any) => {
  return api.post(endpoint.login, data, false);
};
const logout = (data: any) => {
  return api.post(endpoint.logout, data, false);
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
  return api.post(endpoint.editProfile(data?.id), data);
};

const changePassword = (data: any) => {
  return api.post(endpoint.changePassword, data);
};

const myProfile = () => {
  return api.get(endpoint.myProfile);
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
  logout
};

export default AuthService;
