import React, { Fragment } from 'react';

const InputEmail = (props) => (
  
  <Fragment>
     <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      
    />
  </Fragment>
);

InputEmail.propTypes = {};

InputEmail.defaultProps = {
  placeholder:"Email"
};

export default InputEmail;
