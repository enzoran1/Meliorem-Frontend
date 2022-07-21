import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './InputEmail.module.scss';

const InputEmail = (props) => (
  
  <Fragment className={styles.InputEmail} data-testid="InputEmail">
     <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      class="
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

InputEmail.defaultProps = {};

export default InputEmail;
