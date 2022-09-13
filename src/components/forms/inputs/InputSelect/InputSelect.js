import React from 'react';


const InputSelect = (props) => (
  
    <select
    multiple={props.multiple ?? false}
    onChange={props.onChange}
    options={props.options}
    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 
      focus:bg-white 
      focus:border-blue-600 
      focus:outline-none" 
      aria-label="Default select example">
        {props.children}
        
    </select>
 
);

InputSelect.propTypes = {};

InputSelect.defaultProps = {};

export default InputSelect;
