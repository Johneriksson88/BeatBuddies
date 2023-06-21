import axios from "axios";

axios.defaults.baseURL = "https://beatbuddies-api-a72df4dfc93e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();