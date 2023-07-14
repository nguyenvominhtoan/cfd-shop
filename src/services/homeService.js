import axiosInstance from "./axiosInstance";

export const authService = {
  products(payload = {}) {
    return axiosInstance.post(`/products`, payload);
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
