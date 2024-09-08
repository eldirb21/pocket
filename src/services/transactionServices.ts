import {endpoint, api} from '@helpers';

const getTotal = () => {
  return api.get(endpoint.totals);
};
const getAll = (token: any) => {
  return api.get(endpoint.transctionList(token));
};

const getSingle = (id: any) => {
  return api.get(endpoint.transctionDetail(id));
};

const create = (data: any) => {
  return api.post(endpoint.transctionAdd, data);
};

const update = (data: any) => {
  return api.update(endpoint.transctionEdit, data);
};

const remove = (id: any) => {
  return api.delete(endpoint.transctionDel(id));
};

const TransactionService = {
  getTotal,
  getAll,
  getSingle,
  create,
  update,
  remove,
};

export default TransactionService;
