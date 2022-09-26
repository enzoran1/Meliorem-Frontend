import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionRound.module.scss';

const QuestionRound = () => (
  <div className={styles.QuestionRound} data-testid="QuestionRound">
    <p>{props.title}</p>
  </div>
);

QuestionRound.propTypes = {};

QuestionRound.defaultProps = {};

export default QuestionRound;
