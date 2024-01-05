import axios from "axios";

const baseURL = 'https://mock-api.arikmpt.com/api/user';

export const userRegister = async (data: any) => {
  return await axios.post(`${baseURL}/register`, data);
};

export const userLogin = async (data: any) => {
  return await axios.post(`${baseURL}/login`, data);
};