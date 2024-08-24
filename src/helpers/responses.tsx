const responses = (response: any) => {
  // Extract the necessary fields from the response
  const code = response?.code || response?.status;
  const message = response?.message || 'Unexpected Error';
  const data = response?.data;

  switch (code) {
    case 'success':
    case 200:
      return {success: true, data};

    case 400:
      return {
        error: true,
        message: message || 'Bad Request',
      };

    case 401:
      return {
        error: true,
        message: message || 'Unauthorized - Please check your credentials',
      };

    case 500:
      return {
        error: true,
        message: message || 'Internal Server Error - Please try again later',
      };

    default:
      return {
        error: true,
        message: message || 'An unexpected error occurred',
      };
  }
};

export default responses;
