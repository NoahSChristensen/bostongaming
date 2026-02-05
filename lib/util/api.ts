import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_HOST, // e.g. http://127.0.0.1:5039
  withCredentials: true, // optional: cookies
});
