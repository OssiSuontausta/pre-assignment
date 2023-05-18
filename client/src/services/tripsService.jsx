import axios from "axios";

const baseUrl = "http://localhost:3001/api/trips";

export const getAll = (page) => {
  const request = axios.get(`${baseUrl}?page=${page}`);
  return request.then(res => res.data);
};

export const getDepartingTrips = (station) => {
  const request = axios.get(`${baseUrl}/departureStation?station=${station}`);
  return request.then(res => res.data);
};
export const getReturningTrips = (station) => {
  const request = axios.get(`${baseUrl}/returnStation?station=${station}`);
  return request.then(res => res.data);
};