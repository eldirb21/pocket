import {BASE_URL} from '@env';

const fetchMethod = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
  headers: any = '',
  timeout = 10000,
) => {
  // Create request options
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method !== 'GET' && body ? JSON.stringify(body) : undefined, // Only add body if it's not GET
  };

  try {
    const response = await fetch(BASE_URL + url, options);

    // Check if the response status indicates success
    const data = await response.json();
    if (!response.ok) {
      return data;
    }
    return data;
  } catch (error) {
    // Handle error and return it
    return error;
  }
};

export default fetchMethod;
