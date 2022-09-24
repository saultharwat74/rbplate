import axios from "./index";
import { AxiosRequestConfig } from "axios";

export const getter = (url: any, configs?: AxiosRequestConfig) => {
  return axios.get(url, configs);
};
