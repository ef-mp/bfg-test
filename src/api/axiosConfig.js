import axios from "axios"
import { hostURL } from "../constants/api"

const axiosInstance = axios.create({
  baseURL: hostURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

axiosInstance.interceptors.response.use((response) => {
  return response
})

export default axiosInstance
