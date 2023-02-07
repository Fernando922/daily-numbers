import axios, { AxiosError } from 'axios';
import { BASE_URL } from '@env';

import snackbarMessage from '@utils/snackbarMessage';
import { shouldShowSnackbarForThisError } from '@utils/apiHelper';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

const setApiToken = (token: string) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

api.interceptors.response.use(
  response => {
    return response;
  },
  async (error: AxiosError) => {
    // eslint-disable-next-line no-console
    console.log('url', error.config.url);
    if (shouldShowSnackbarForThisError(error.config.url)) {
      snackbarMessage(
        error.response?.data.message ||
          'Ocorreu um erro, por favor tente novamente mais tarde.',
      );
    }
);

export { api, setApiToken };
