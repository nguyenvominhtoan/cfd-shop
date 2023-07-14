import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../config/localStorage";

// Tạo một instance của Axios
const axiosInstance = axios.create({
  baseURL: "https://cfdshop.cfdcircle.vn/api/v1",
});

// Interceptor cho phép can thiệp vào quá trình nhận phản hồi (RESPONSE) từ server.
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    console.log("error.response.status", error.response.status);
    // Nếu mã lỗi là 401 hoặc 403
    if (error.response.status === 401 || error.response.status === 403) {
      try {
        // Gọi API để cập nhật token mới
        const { data } = await axios.post("/refresh_token", {
          refreshToken: localStorage.getItem(LOCAL_STORAGE.refreshToken),
        });

        // Lưu lại token mới vào local storage
        localStorage.setItem(LOCAL_STORAGE.token, data.token);
        localStorage.setItem("refreshToken", data.refreshToken);

        // Thay đổi token trong header của yêu cầu ban đầu
        originalRequest.headers.Authorization = `Bearer ${data.token}`;

        // Gọi lại yêu cầu ban đầu với token mới
        return instance(originalRequest);
      } catch (error) {
        console.log(error);
        return "khongcalldcapi";
      }
    }

    // Nếu lỗi không phải là 401 hoặc 403, trả về lỗi ban đầu
    return Promise.reject(error);
  }
);

// Interceptor cho phép can thiệp vào quá trình gửi yêu cầu (REQUEST) từ server.
axiosInstance.interceptors.request.use(
  (config) => {
    // xử lý yêu cầu trước khi gửi đi
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  (error) => {
    // xử lý lỗi nếu có
    return Promise.reject(error);
  }
);

export default axiosInstance;
