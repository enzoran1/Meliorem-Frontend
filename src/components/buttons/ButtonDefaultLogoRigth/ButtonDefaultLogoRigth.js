import React from "react";

import ButtonArrowOutlineWhite from "../ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import styles from "./ButtonDefaultLogoRigth.module.scss";

const ButtonDefaultLogoRigth = (props) => (
  <button
    onClick={props.onClick}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    data-testid="ButtonDefaultLogoRigth"
  >
    <div className={styles.ButtonDefaultLogoRigth}>
      <span>{props.title} </span>

      <p>
        <ButtonArrowOutlineWhite />
      </p>
    </div>
  </button>
);

export default ButtonDefaultLogoRigth;
