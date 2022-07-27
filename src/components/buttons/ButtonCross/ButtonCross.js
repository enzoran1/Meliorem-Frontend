import React from "react";
import styles from "./ButtonCross.module.scss";

const ButtonCross = (props) => (
  <div
    onClick={props.onClick}
    className={styles.ButtonCross}
    data-testid="ButtonCross"
  >
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L10.9512 13M1 13L10.9512 1L1 13Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

ButtonCross.defaultProps = {
  color: "red",
};

export default ButtonCross;
