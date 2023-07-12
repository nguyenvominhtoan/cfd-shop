import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { validate } from "../../utils/validate";

const RegisterForm = () => {
  const { onRegister } = useAuthen();
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
      onRegister?.({
        firstName: form?.name || "",
        lastName: "",
        email: form?.email || "",
        password: form?.password || "",
      });
    } else {
      console.log("Validate Fail");
    }
  };
  return (
    <>
      {" "}
      <div
        className="tab-pane fade"
        id="register"
        role="tabpanel"
        aria-labelledby="register-tab"
      >
        <form action="#" onClick={onSubmit}>
          <div className="form-group">
            <label htmlFor="register-email">Your email address *</label>
            <Input type="email" {...register("email")} />
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="register-password">Password *</label>
            <Input type="password" {...register("password")} />
          </div>
          {/* End .form-group */}
          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              <span>SIGN UP</span>
              <i className="icon-long-arrow-right" />
            </button>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="register-policy"
                required
              />
              <label className="custom-control-label" htmlFor="register-policy">
                I agree to the
                <a href="privacy-policy.html">privacy policy</a> *
              </label>
            </div>
            {/* End .custom-checkbox */}
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
              <a href="#" className="btn btn-login  btn-f">
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

export default RegisterForm;
