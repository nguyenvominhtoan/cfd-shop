import React from "react";

export const Input = ({
  label,
  required,
  value,
  onChange,
  type = "text",
  error,
  ...inputProps
}) => {
  return (
    <>
      {" "}
      {/* <label className="label">
        {label} {required && <span>*</span>}
      </label> */}
      <input
        value={value}
        onChange={onChange}
        type={type}
        {...inputProps}
        className={`form-control ${!!error ? "formerror" : ""}`}
      />
      <p className="form-error">{error || ""}</p>
    </>
  );
};
export default Input;
