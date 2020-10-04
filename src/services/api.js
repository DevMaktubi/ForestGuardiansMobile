import axios from "axios";

const api = axios.create({
  baseURL: "https://nasahackathonbackend.herokuapp.com",
});

export default api;
