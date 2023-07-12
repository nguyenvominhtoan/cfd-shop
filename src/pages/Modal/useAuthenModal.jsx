import React from "react";
import { useDispatch } from "react-redux";

const useAuthenModal = () => {
  const dispatch = useDispatch();
  const { isAuthenModalOpen, closeAuthenModal, authenForm, setAuthenForm } =
    useMAi;
  const onChangeTab = (tab) => {
    setAuthenForm(tab);
  };
  const onClose = () => {
    closeAuthenModal();
  };
  const onLogin = () => {
    if (data?.email) {
      try {
        const payload = {
          email: data.email,
          password: data.password,
        };
        // call api
        dispatch(login(payload));
      } catch (error) {}
    }
  };
  return <></>;
};

export default useAuthenModal;
