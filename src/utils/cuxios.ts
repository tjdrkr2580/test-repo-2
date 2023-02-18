import axios from "axios";

export const cuxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});
