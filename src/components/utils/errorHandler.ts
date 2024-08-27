import axios from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data && typeof error.response.data === 'string') {
      return error.response.data;
    } else {
      return 'Unrecognized axios error!';
    }
  } else {
    return 'Unknown error when creating blog!';
  }
};
