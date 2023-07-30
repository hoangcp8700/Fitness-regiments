import { getAccessToken } from '@utils/functions/storage';
import axiosClient, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

// version: 0.27.2
/**
 * Creates an initial 'axios' instance with custom settings.
 */
const axiosInstance = axiosClient.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosInstance.interceptors.request.use(
  ($config: AxiosRequestConfig): AxiosRequestConfig => {
    if ($config.headers) {
      const token = getAccessToken();
      if (token) {
        $config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error.response ? (error.response.data as any).errors : error),
);

export default axiosInstance;
