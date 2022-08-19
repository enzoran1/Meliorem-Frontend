import React from "react";

import styles from "./ButtonActivity.module.scss";

const ButtonActivity = (props) => (
  <button
    onClick={props.onClick}
    className={styles.ButtonActivity}
    data-testid="ButtonActivity"
  >
    <span>{props.title}</span>
  </button>
);

ButtonActivity.propTypes = {};

ButtonActivity.defaultProps = {
  title: "Activité",
};

export default ButtonActivity;
