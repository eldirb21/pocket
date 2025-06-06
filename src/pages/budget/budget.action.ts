import {BudgetService} from '@services';
import * as _ from './budget.types';
import {dispatchLoad, dispatchSuccess, dispatchError} from '@helpers';
import {toasts} from '@constants';

const getListBudget = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_LIST, []);
  const res: any = await BudgetService.getAll(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_LIST, res?.data);
  } else {
    toasts.error(JSON.stringify(res['TypeError']), 'Failed', true);
    dispatchError(dispatch, _.GET_LIST, res);
  }
};
const getSingleBudget = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.GET_SINGLE, []);
  const res: any = await BudgetService.getSingle(obj);
  if (res.status === 200) {
    dispatchSuccess(dispatch, _.GET_SINGLE, res);
  } else {
    dispatchError(dispatch, _.GET_SINGLE, res);
  }
};

const resetBudgetAction = () => (dispatch: any) => {
  dispatchError(dispatch, _.ADD_BUDGET, '');
  dispatchError(dispatch, _.EDIT_BUDGET, '');
  dispatchError(dispatch, _.DELETE_BUDGET, '');
  dispatchSuccess(dispatch, _.ADD_BUDGET, '');
  dispatchSuccess(dispatch, _.EDIT_BUDGET, '');
  dispatchSuccess(dispatch, _.DELETE_BUDGET, '');
};
const addBudget = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.ADD_BUDGET, null);
  const res: any = await BudgetService.create(obj);
  if (res.status === 201) {
    dispatchSuccess(dispatch, _.ADD_BUDGET, res);
  } else {
    dispatchError(dispatch, _.ADD_BUDGET, res);
  }
};
const editBudget = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.EDIT_BUDGET, null);
  const res: any = await BudgetService.update(obj);
  if (res.status === 201) {
    dispatchSuccess(dispatch, _.EDIT_BUDGET, res);
  } else {
    dispatchError(dispatch, _.EDIT_BUDGET, res);
  }
};
const deleteBudget = (obj: any) => async (dispatch: any) => {
  dispatchLoad(dispatch, _.DELETE_BUDGET, null);
  const res: any = await BudgetService.remove(obj);
  if (res.status === 201) {
    dispatchSuccess(dispatch, _.DELETE_BUDGET, res);
  } else {
    dispatchError(dispatch, _.DELETE_BUDGET, res);
  }
};

export {
  getListBudget,
  getSingleBudget,
  addBudget,
  editBudget,
  deleteBudget,
  resetBudgetAction,
};
