import React from "react";

import styles from "./ButtonFixedRigth.module.scss";

const ButtonFixedRigth = (props) => (
  <div
    className={styles.ButtonFixedRigth}
    data-testid="ButtonFixedRigth"
    style={props.style}
    onClick={props.onClick}
  >
    <svg
      enable-background="new 0 0 70 70"
      height="70px"
      id="Icons"
      version="1.1"
      viewBox="0 0 70 70"
      width="70px"
      fill={props.bgBtn}
    >
      <polygon points="53,32.5 37.5,32.5 37.5,17 32.5,17 32.5,32.5 17,32.5 17,37.5 32.5,37.5 32.5,53 37.5,53 37.5,37.5 53,37.5 " />
    </svg>
  </div>
);

ButtonFixedRigth.propTypes = {};

ButtonFixedRigth.defaultProps = {};

export default ButtonFixedRigth;
