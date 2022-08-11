import React from "react";

import styles from "./CoursSpeaker.module.scss";

const CoursSpeaker = () => (
  <div className={styles.CoursSpeaker} data-testid="CoursSpeaker">
    <div className={styles.CoursStudent_Container}>
      <div className={styles.Container_Header}>
        <div className={styles.Header_Top}></div>
        <div className={styles.Header_Center}></div>
        <div className={styles.Header_Bottom}></div>
      </div>
      <div className={styles.Container_Body}>
        <div className={styles.Body_Top}></div>
        <div className={styles.Body_Center}></div>
        <div className={styles.Body_Bottom}></div>
      </div>
      <div className={styles.Container_Footer}>
        <div className={styles.Footer_Top}></div>
        <div className={styles.Footer_Center}></div>
        <div className={styles.Footer_Bottom}></div>
      </div>
    </div>
  </div>
);

CoursSpeaker.propTypes = {};

CoursSpeaker.defaultProps = {};

export default CoursSpeaker;
