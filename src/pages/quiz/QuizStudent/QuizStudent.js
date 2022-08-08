import React from "react";
import PropTypes from "prop-types";
import styles from "./QuizStudent.module.scss";

const QuizStudent = () => (
  <div className={styles.QuizStudent} data-testid="QuizStudent">
    QuizStudent Component
  </div>
);

QuizStudent.propTypes = {};

QuizStudent.defaultProps = {};

export default QuizStudent;
