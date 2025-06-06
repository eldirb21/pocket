import {dispatchError, dispatchLoad, dispatchSuccess} from '@helpers/responses';
import {TransactionService} from '@services';
import * as _ from './transaction.types';

const getTotal = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_TOTAL, {});
  const res: any = await TransactionService.getTotal(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_TOTAL, res?.data);
  } else {
    dispatchError(dispatch, _.GET_TOTAL, res);
  }
};
const getListTransaction = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_LIST, []);
  const res: any = await TransactionService.getAll(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_LIST, res?.data);
  } else {
    dispatchError(dispatch, _.GET_LIST, res);
  }
};
const getSingleTransaction = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_SINGLE, []);
  const res: any = await TransactionService.getSingle(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_SINGLE, res);
  } else {
    dispatchError(dispatch, _.GET_SINGLE, res);
  }
};

const resetTransactionAction = () => (dispatch: any) => {
  dispatchError(dispatch, _.ADD_TRANSACTION, '');
  dispatchError(dispatch, _.EDIT_TRANSACTION, '');
  dispatchError(dispatch, _.DELETE_TRANSACTION, '');
  dispatchSuccess(dispatch, _.ADD_TRANSACTION, '');
  dispatchSuccess(dispatch, _.EDIT_TRANSACTION, '');
  dispatchSuccess(dispatch, _.DELETE_TRANSACTION, '');
};

const addTransaction = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.ADD_TRANSACTION, null);
  const res: any = await TransactionService.create(obj);
  if (res.status === 201) {
    dispatchSuccess(dispatch, _.ADD_TRANSACTION, res);
  } else {
    dispatchError(dispatch, _.ADD_TRANSACTION, res);
  }
};
const editTransaction = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.EDIT_TRANSACTION, null);
  const res: any = await TransactionService.update(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.EDIT_TRANSACTION, res);
  } else {
    dispatchError(dispatch, _.EDIT_TRANSACTION, res);
  }
};
const deleteTransaction = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.DELETE_TRANSACTION, null);
  const res: any = await TransactionService.remove(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.DELETE_TRANSACTION, res);
  } else {
    dispatchError(dispatch, _.DELETE_TRANSACTION, res);
  }
};

export {
  getTotal,
  getListTransaction,
  getSingleTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
  resetTransactionAction,
};
