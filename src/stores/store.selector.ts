import {doLogon, doLogout, register} from '@pages/auth/auth.action';
import {
  addBudget,
  deleteBudget,
  editBudget,
  getListBudget,
  getSingleBudget,
  resetBudgetAction,
} from '@pages/budget/budget.action';
import {editProfile, getProfile, resetActions} from '@pages/profile/profile.action';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getListTransaction,
  getSingleTransaction,
  getTotal,
  resetTransactionAction,
} from '@pages/transaction/transaction.action';

const mapStateToProps = (state: any) => ({
  logon: state.authReducers,
  budget: state.budgetReducer,
  transaction: state.transactionReducer,
  profile: state.profileReducer,
});

const mapDispatchToProps = {
  doLogon,
  register,
  doLogout,

  getProfile,
  editProfile,
  resetActions,

  getListTransaction,
  getSingleTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
  resetTransactionAction,
  getTotal,

  getListBudget,
  getSingleBudget,
  addBudget,
  editBudget,
  deleteBudget,
  resetBudgetAction,
};

export {mapStateToProps, mapDispatchToProps};
