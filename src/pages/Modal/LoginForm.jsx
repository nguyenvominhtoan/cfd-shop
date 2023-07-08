import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { validate } from "../../utils/validate";

const LoginForm = () => {
  const { onLogin } = useAuthen();
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const rules = {
    email: [
      { required: true },
      {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Vui lòng điền đúng định dạng",
      },
    ],
    password: [{ required: true, message: "Nhập vào đi ku" }],
  };
  const register = (fieldName) => {
    return {
      value: form[fieldName],
      error: error[fieldName],
      onChange: (ev) => setForm({ ...form, [fieldName]: ev.target.value }),
    };
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errObj = validate(rules, form);
    setError(errObj);
    if (Object.keys(errObj)?.length === 0) {
      // handleSubmit?.(form);
      onLogin?.(form);
    } else {
      console.log("Validate Fail");
    }
  };
  return (
    <>
      {" "}
      <div
        className="tab-pane fade show active"
        id="signin"
        role="tabpanel"
        aria-labelledby="signin-tab"
      >
        <form onSubmit={onSubmit} action="#">
          <div className="form-group">
            <label htmlFor="singin-email">Username or email address *</label>
            <Input type="text" {...register("email")} />
            {/* <input
              type="email"
              className="form-control"
              id="register-password"
              name="register-password"
              required
            /> */}
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="singin-password">Password *</label>
            <Input type="password" {...register("password")} />
          </div>
          {/* End .form-group */}
          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              <span>LOG IN</span>
              <i className="icon-long-arrow-right" />
            </button>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember"
              />
              <label className="custom-control-label" htmlFor="signin-remember">
                Remember Me
              </label>
            </div>
            {/* End .custom-checkbox */}
            <a href="#" className="forgot-link">
              Forgot Your Password?
            </a>
          </div>
          {/* End .form-footer */}
        </form>
        <div className="form-choice">
          <p className="text-center">or sign in with</p>
          <div className="row">
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-g">
                <i className="icon-google" />
                Login With Google
              </a>
            </div>
            {/* End .col-6 */}
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-f">
                <i className="icon-facebook-f" />
                Login With Facebook
              </a>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .form-choice */}
      </div>
    </>
  );
};

export default LoginForm;
