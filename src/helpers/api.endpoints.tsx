const endpoint = {
  login: 'auth/login',
  tokenRefresh: 'auth/token-refresh',
  forgotPassword: 'auth/forgot-password',
  resetPassword: (token: any) => `auth/reset-password/${token}`,
  register: 'auth/register',
  editProfile: 'auth/users/edit-profile',
  changePassword: 'auth/users/change-password',
  myProfile: (token: any) => `auth/users/profile/${token}`,

  transctionAdd: `transction`,
  transctionEdit: `transction`,
  transctionDel: (id: any) => `transction/${id}`,
  transctionDetail: (id: any) => `transction/${id}`,
  transctionList: (obj: any) =>
    `transction?page=${obj.page}&pageSize=${obj.pageSize}`,

  budgetAdd: `budget`,
  budgetEdit: `budget`,
  budgetDel: (id: any) => `budget/${id}`,
  budgetDetail: (id: any) => `budget/${id}`,
  budgetList: (obj: any) => `budget?page=${obj.page}&pageSize=${obj.pageSize}`,
};

export default endpoint;
