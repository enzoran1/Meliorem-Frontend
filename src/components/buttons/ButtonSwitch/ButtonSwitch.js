import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonSwitch.module.scss';

const ButtonSwitch = () => (
  <div className={styles.ButtonSwitch} data-testid="ButtonSwitch">
     <div class="form-check form-switch">
    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  </div>
  </div>
);

ButtonSwitch.propTypes = {};

ButtonSwitch.defaultProps = {};

export default ButtonSwitch;
