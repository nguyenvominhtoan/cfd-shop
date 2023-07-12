import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const ModalPage = () => {
  const { isAuthenModalOpen, closeAuthenModal } = useAuthen();
  const [renderForm, setrenderForm] = useState("login");
  const onClose = () => {
    closeAuthenModal();
    setrenderForm("login");
  };

  return (
    <>
      <div
        className={`modal fade ${isAuthenModalOpen ? "show" : ""}`}
        style={{ display: isAuthenModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true" onClick={onClose}>
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul
                    className="nav nav-pills nav-fill nav-border-anim"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="signin-tab"
                        data-toggle="tab"
                        href="#signin"
                        role="tab"
                        aria-controls="signin"
                        aria-selected="true"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="register-tab"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    {/*  ================= Login ================= */}
                    <LoginForm
                      renderForm={renderForm}
                      setrenderForm={setrenderForm}
                    />
                    {/* .End .tab-pane */}
                    {/* ================= Register =================== */}
                    <RegisterForm
                      renderForm={renderForm}
                      setrenderForm={setrenderForm}
                    />
                    {/* .End .tab-pane */}
                  </div>
                  {/* End .tab-content */}
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {isAuthenModalOpen && (
        <div
          className={`modal-backdrop fade ${isAuthenModalOpen ? "show" : ""}`}
        ></div>
      )}
    </>
  );
};

export default ModalPage;
