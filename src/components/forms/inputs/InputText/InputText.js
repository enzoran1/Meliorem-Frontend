import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputText.module.scss';

const InputText = () => (
  <div className={styles.InputText} data-testid="InputText">
    InputText Component
  </div>
);

InputText.propTypes = {};

InputText.defaultProps = {};

export default InputText;
