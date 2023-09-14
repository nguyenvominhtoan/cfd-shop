import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../../config/localStorage";
import { authService } from "../../services/authService";

const AuthenContext = createContext({});
export const AuthenProvider = ({ children }) => {
  const [isAuthenModalOpen, setIsAuthenModalOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const navigate = useNavigate();

  useEffect(async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE.token);
    if (accessToken) {
      // call api
      onGetProfile(accessToken);
    }
  }, []);

  const openAuthenModal = () => {
    if (!!!localStorage.getItem(LOCAL_STORAGE.token)) {
      setIsAuthenModalOpen(true);
    }
  };
  const onGetProfile = async (token) => {
    const profileRes = await authService.getProfile(token);
    console.log("profileRes", profileRes);
    // if (profileRes === "khongcalldcapi") {
    //   navigate("/about", { replace: true });
    // }
    if (profileRes?.data?.data) {
      setProfileInfo(profileRes?.data?.data);
    }
  };
  const closeAuthenModal = () => setIsAuthenModalOpen(false);
  const onLogin = async (loginData) => {
    console.log("loginData", loginData);
    //call api
    try {
      const res = await authService.login(loginData);
      console.log("res", res);
      const { token, refreshToken } = res?.data?.data || {};
      // save on localStorage
      localStorage.setItem(LOCAL_STORAGE.token, token);
      localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken);
      if (!!token) {
        // get Profile
        onGetProfile(token);
        // message
        message.success("Đăng nhập thành công");
        // close modal
        closeAuthenModal();
      }
    } catch (error) {
      console.log("error", error);
      message.error("Đăng nhập thất bại");
    }
  };

  const handleProduct = () => {};
  const onRegister = async (registerData) => {
    //call api
    try {
      const res = await authService.register(registerData);
      console.log("res", res?.data?.data);
      if (res?.data?.data.id) {
        message.success("Đăng ký thành công");
        onLogin({
          email: registerData.email,
          password: registerData.password,
        });
      }
    } catch (error) {
      console.log("error", error);
      message.error("Đăng ký thất bại");
    }
  };
  const onLogOut = () => {
    localStorage.clear();
    setProfileInfo("");
    message.success("Đăng xuất thành công");
  };
  return (
    <AuthenContext.Provider
      value={{
        isAuthenModalOpen,
        openAuthenModal,
        closeAuthenModal,
        onLogin,
        onRegister,
        onLogOut,
        onGetProfile,
        profileInfo,
        setIsAuthenModalOpen,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
export const useAuthen = () => useContext(AuthenContext);
