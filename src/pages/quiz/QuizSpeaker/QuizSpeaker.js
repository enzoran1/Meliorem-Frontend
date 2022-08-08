import React from "react";
import PropTypes from "prop-types";
import styles from "./QuizSpeaker.module.scss";

const QuizSpeaker = () => (
  <div className={styles.QuizSpeaker} data-testid="QuizSpeaker">
    QuizSpeaker Component
  </div>
);

QuizSpeaker.propTypes = {};

QuizSpeaker.defaultProps = {};

export default QuizSpeaker;
