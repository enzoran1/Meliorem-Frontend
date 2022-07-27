import React from "react";
import styles from "./ButtonPencils.module.scss";

const ButtonPencils = () => (
  <div className={styles.ButtonPencils} data-testid="ButtonPencils">
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1933 2.86027L14.14 5.80694M12.4433 1.61027C12.8341 1.21952 13.3641 1 13.9167 1C14.4693 1 14.9992 1.21952 15.39 1.61027C15.7808 2.00103 16.0003 2.531 16.0003 3.08361C16.0003 3.63622 15.7808 4.16619 15.39 4.55694L3.91667 16.0303H1V13.0536L12.4433 1.61027Z"
        stroke="#556BDA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

export default ButtonPencils;
