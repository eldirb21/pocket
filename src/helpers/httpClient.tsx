import {localstore} from '@utils';
import fetchMethod from './fetchMethod';

// Secured instance for API calls requiring a token
const securedInstance = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
) => {
  const token = await localstore.getStore('token');
  return new Promise((resolve, reject) => {
    fetchMethod(url, method, body, {
      Authorization: `Bearer ${token}`,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

// Non-secured instance for API calls without token
const nonSecuredInstance = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
) => {
  return new Promise((resolve, reject) => {
    fetchMethod(url, method, body)
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

// API object to handle various HTTP methods
const api = {
  async post(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return await instance(url, 'POST', reqBody);
  },
  async get(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return instance(url, 'GET', reqBody);
  },
  async delete(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return await instance(url, 'DELETE', reqBody);
  },
  async update(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return await instance(url, 'PUT', reqBody);
  },
};

export default api;
