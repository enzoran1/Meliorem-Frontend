import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonArrowOutlinePurpel.module.scss';

const ButtonArrowOutlinePurpel = () => (
  <div className={styles.ButtonArrowOutlinePurpel} data-testid="ButtonArrowOutlinePurpel">
    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0417 10.5L21.6667 15M21.6667 15L17.0417 19.5M21.6667 15H9.33333M29.375 15C29.375 16.7728 29.0161 18.5283 28.3188 20.1662C27.6215 21.8041 26.5995 23.2923 25.3111 24.5459C24.0227 25.7995 22.4931 26.7939 20.8097 27.4724C19.1263 28.1508 17.3221 28.5 15.5 28.5C13.6779 28.5 11.8737 28.1508 10.1903 27.4724C8.50687 26.7939 6.97731 25.7995 5.68889 24.5459C4.40048 23.2923 3.37846 21.8041 2.68117 20.1662C1.98389 18.5283 1.625 16.7728 1.625 15C1.625 11.4196 3.08683 7.9858 5.68889 5.45406C8.29096 2.92232 11.8201 1.5 15.5 1.5C19.1799 1.5 22.709 2.92232 25.3111 5.45406C27.9132 7.9858 29.375 11.4196 29.375 15Z" stroke="#495ECA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
);

ButtonArrowOutlinePurpel.propTypes = {};

ButtonArrowOutlinePurpel.defaultProps = {};

export default ButtonArrowOutlinePurpel;
