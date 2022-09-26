import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizResult.module.scss';

const QuizResult = () => (
  <div className={styles.QuizResult} data-testid="QuizResult">
    <div className={styles.QuizResult_Container}>
      <div className={styles.Container_Header}>
        <h1>Quiz Result</h1>
      </div>
      <div className={styles.Container_Body}>
        <div className={styles.Body_Left}></div>
        <div className={styles.Body_Center}></div>
        <div className={styles.Body_Right}></div>
      </div>
      <div className={styles.Container_Footer}>
        
      </div>
      <div className={styles.Container_Button}></div>

  </div>
  </div>
);

QuizResult.propTypes = {};

QuizResult.defaultProps = {};

export default QuizResult;
