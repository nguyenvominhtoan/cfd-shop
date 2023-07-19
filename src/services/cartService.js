import axiosInstance from "./axiosInstance";

export const cartServices = {
  getCart() {
    return axiosInstance.get(`/carts/me`);
  },
  updateCart(payload = {}) {
    return axiosInstance.put(`/carts`, payload);
  },
};
