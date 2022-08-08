import React from "react";
import PropTypes from "prop-types";
import styles from "./CoursSpeaker.module.scss";

const CoursSpeaker = () => (
  <div className={styles.CoursSpeaker} data-testid="CoursSpeaker">
    CoursSpeaker Component
  </div>
);

CoursSpeaker.propTypes = {};

CoursSpeaker.defaultProps = {};

export default CoursSpeaker;
