import {endpoint, api} from '@helpers';

const getAll = (token: any) => {
  return api.get(endpoint.budgetList(token));
};

const getSingle = (id: any) => {
  return api.get(endpoint.budgetDetail(id));
};

const create = (data: any) => {
  return api.post(endpoint.budgetAdd, data);
};

const update = (data: any) => {
  return api.update(endpoint.budgetEdit, data);
};

const remove = (id: any) => {
  return api.delete(endpoint.budgetDel(id));
};

const BudgetService = {
  getAll,
  getSingle,
  create,
  update,
  remove,
};

export default BudgetService;
