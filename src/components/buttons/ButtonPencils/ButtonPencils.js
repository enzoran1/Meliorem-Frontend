import React from "react";
import styles from "./ButtonPencils.module.scss";

const ButtonPencils = (props) => (
  <div
    onClick={props.onClick}
    className={styles.ButtonPencils}
    data-testid="ButtonPencils"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6933 3.36027L14.64 6.30694M12.9433 2.11027C13.3341 1.71952 13.8641 1.5 14.4167 1.5C14.9693 1.5 15.4992 1.71952 15.89 2.11027C16.2808 2.50103 16.5003 3.031 16.5003 3.58361C16.5003 4.13622 16.2808 4.66619 15.89 5.05694L4.41667 16.5303H1.5V13.5536L12.9433 2.11027Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

ButtonPencils.defaultProps = {
  color: "#4F46E5",
};

export default ButtonPencils;
