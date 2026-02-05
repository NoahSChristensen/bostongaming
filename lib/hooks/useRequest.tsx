import type { AxiosRequestConfig, Method } from "axios";
import { api } from "../util/api";

export async function useRequest<TResponse, TBody = unknown>(
  url: string,
  options: {
    method?: Method;
    params?: Record<string, any>;
    data?: TBody;
    headers?: Record<string, string>;
  } = {},
): Promise<TResponse> {
  const config: AxiosRequestConfig = {
    url,
    method: options.method ?? "GET",
    params: options.params,
    data: options.data,
    headers: options.headers,
  };

  const res = await api.request<TResponse>(config);
  return res.data;
}
