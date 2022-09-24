import axios from "./index";
import { AxiosRequestConfig } from "axios";

export const putter = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  return axios.put(url, data, config);
};
