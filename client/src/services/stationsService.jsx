import axios from "axios";

const baseUrl = "http://localhost:3001/api/stations";

export const getAll = () => {
  const request = axios.get(`${baseUrl}`);
  return request.then(res => res.data);
};

export const getOneStation = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(res => res.data);
};