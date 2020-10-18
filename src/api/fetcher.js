import axiosInstance from "./axiosConfig"
import { urlFilter, urlKey, urlSite } from "../constants/api"

export const fetcher = async (url, method, body = {}, options = {}) => {
  const urlWithParams = `${url}&${urlFilter}&${urlKey}&${urlSite}`

  if (method === "get" || method === "delete") {
    return axiosInstance[method](urlWithParams, options)
  }
  return axiosInstance[method](urlWithParams, body, options)
}
