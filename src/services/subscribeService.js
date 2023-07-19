import axiosInstance from "./axiosInstance";

export const subscribeService = {
  subscribe(payload = {}) {
    return axiosInstance.post(`/subscribes`, payload);
  },
  subscribeDeal(payload = {}) {
    return axiosInstance.post(`/subscribes/deals`, payload);
  },
};
