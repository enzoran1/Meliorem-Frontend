import React from 'react';


const InputsNumber = (props) => (
  <input
  type="number"
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
  id="exampleNumber0"
  placeholder={props.placeholder}
  defaultValue={props.value}
  onChange={props.onChange}
/>
);

InputsNumber.propTypes = {};

InputsNumber.defaultProps = {};

export default InputsNumber;
