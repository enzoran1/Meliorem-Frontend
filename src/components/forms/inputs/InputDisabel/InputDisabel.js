import React, { Fragment } from "react";

const InputDisabel = (props) => (
  <Fragment>
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput5"
      placeholder={props.placeholder}
      aria-label="Disabled input example"
      disabled
    />
  </Fragment>
);

export default InputDisabel;
