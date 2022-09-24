import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonArrowLeft.module.scss';

const ButtonArrowLeft = () => (
  <div className={styles.ButtonArrowLeft} data-testid="ButtonArrowLeft">
    {/* <svg fill='#fff' height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z M7.41421356,7 L12,7 L12,9 L7.41421356,9 L8.70710678,10.2928932 L7.29289322,11.7071068 L3.58578644,8 L7.29289322,4.29289322 L8.70710678,5.70710678 L7.41421356,7 Z" fillRule="evenodd"/></svg> */}
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      transform='rotate(180,0,0)'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7L14 10M14 10L11 13M14 10H6M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

ButtonArrowLeft.propTypes = {};

ButtonArrowLeft.defaultProps = {};

export default ButtonArrowLeft;
