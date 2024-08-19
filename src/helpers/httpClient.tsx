import { localstore } from "@/utils";
import fetchMethod from "./fetchMethod";
import responses from "./responses";

// Secured instance for API calls requiring a token
const securedInstance = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any
) => {
  const token = await localstore.getStore("token");
  return new Promise((resolve, reject) => {
    fetchMethod(url, method, body, {
      Authorization: `Bearer ${token}`,
    })
      .then((responseData: any) => responseData.json())
      .then((response: any) => {
        const result = responses(response);
        if (result.error) {
          resolve(result);
        } else {
          resolve(result);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

// Non-secured instance for API calls without token
const nonSecuredInstance = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any
) => {
  return new Promise((resolve, reject) => {
    fetchMethod(url, method, body)
      .then((responseData: any) => responseData.json())
      .then((response: any) => {
        const result = responses(response);
        if (result.error) {
          resolve(result);
        } else {
          resolve(result);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
};

// API object to handle various HTTP methods
const api = {
  post(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return instance(url, "POST", reqBody);
  },
  get(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return instance(url, "GET", reqBody);
  },
  delete(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return instance(url, "DELETE", reqBody);
  },
  update(url: string, reqBody?: any, needToken: boolean = true) {
    const instance = needToken ? securedInstance : nonSecuredInstance;
    return instance(url, "PUT", reqBody);
  },
};

export default api;
