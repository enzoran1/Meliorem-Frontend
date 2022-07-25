import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonDefaultLogoRigth.module.scss';

const ButtonDefaultLogoRigth = (props) => (
  <div className={styles.ButtonDefaultLogoRigth} data-testid="ButtonDefaultLogoRigth">
    <a href="">{props.title} </a>
    <p>{props.image}</p>

  </div>
);

ButtonDefaultLogoRigth.propTypes = {};

ButtonDefaultLogoRigth.defaultProps = {};

export default ButtonDefaultLogoRigth;
