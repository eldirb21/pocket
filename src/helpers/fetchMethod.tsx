const baseUrl = 'https://658ad179-166c-42a9-98cf-3b1c7eca9b3b.mock.pstmn.io/';

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

  // Return a race between the fetch and timeout
  return Promise.race([
    fetch(baseUrl + url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout),
    ),
  ]);
};

export default fetchMethod;
