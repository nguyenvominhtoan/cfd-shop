import axiosInstance from "./axiosInstance";

export const orderServices = {
  getReviewFollowProduct(id = "") {
    return axiosInstance.get(`/reviews/product/${id}`);
  },
};
