import React from "react";

export default function FormInput(props) {
  return (
    <>
      <label className="form-label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
