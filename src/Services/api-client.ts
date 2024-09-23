import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  next: string
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6ded8adacc7c427b927ad410807f67c9",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<Response<T>>(this.endpoint, config).then((res) => res.data);
  };

  postData = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
