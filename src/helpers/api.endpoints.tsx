import {func} from '@utils';

const endpoint = {
  login: 'auth/login',
  logout:'auth/users/logout',
  tokenRefresh: 'auth/token-refresh',
  forgotPassword: 'auth/forgot-password',
  resetPassword: (token: any) => `auth/reset-password/${token}`,
  register: 'auth/register',
  editProfile: (id: any) => `auth/users/profile-edit/${id}`,
  changePassword: 'auth/users/change-password',
  myProfile: `auth/users/profile`,

  transctionAdd: `transction`,
  transctionEdit: `transction`,
  transctionDel: (id: any) => `transction/${id}`,
  transctionDetail: (id: any) => `transction/${id}`,
  transctionList: (obj: any) => `transction?${func.queryString(obj)}`,
  totals: (obj: any) => `total?${func.queryString(obj)}`,

  budgetAdd: `budget`,
  budgetEdit: `budget`,
  budgetDel: (id: any) => `budget/${id}`,
  budgetDetail: (id: any) => `budget/${id}`,
  budgetList: (obj: any) => `budget?${func.queryString(obj)}`,
};

export default endpoint;
