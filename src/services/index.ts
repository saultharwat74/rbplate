import axios, { AxiosError, AxiosResponse } from "axios";

const handleSuccess = (
  res: AxiosResponse
): AxiosResponse | Promise<AxiosResponse> => res;
const handleError = (error: AxiosError) => {
  throw error;
};

export const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  instance.interceptors.response.use(handleSuccess, handleError);
  return instance;
};
export default createAxiosInstance("");
export { axiosBaseQuery } from './axiosBaseQuery';
export { deleter } from './deleter';
export { getter } from './getter';
export { poster } from './poster';
export { putter } from './putter';
export * from './requests';