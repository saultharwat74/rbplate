import axios from "./index";
import { AxiosRequestConfig } from "axios";

export const poster = (url: string, data: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config);
};
