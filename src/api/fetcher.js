import axiosInstance from "./axiosConfig"

export const fetcher = async (url, method, body = {}, options = {}) => {
  if (method === "get" || method === "delete") {
    return axiosInstance[method](url, options)
  }
  return axiosInstance[method](url, body, options)
}
