import axios from "./index";
import { AxiosRequestConfig } from "axios";

export const deleter = (url: string, config?: AxiosRequestConfig) => {
  return axios.delete(url, config);
};
