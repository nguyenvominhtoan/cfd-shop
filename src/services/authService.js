import axios from "axios";
import { BASE_URL } from "../config/environments";
import axiosInstance from "./axiosInstance";

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(`/customer/login`, payload);
  },
  register(payload = {}) {
    return axiosInstance.post(`/customer/register`, payload);
  },
  getProfile(token = "") {
    console.log("token", token);
    return axiosInstance.get(`/customer/profiles`);
  },
  // updateProfile(payload = {}) {
  //   return axiosI;
  // },
};
