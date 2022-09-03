import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.SpinnerContainer} data-testid="Spinner">
    <div className={styles.loadingSpinner}></div>
  </div>
);

Spinner.propTypes = {};

Spinner.defaultProps = {};

export default Spinner;
