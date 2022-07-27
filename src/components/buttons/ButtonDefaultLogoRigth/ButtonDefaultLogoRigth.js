import React from "react";
import ButtonArrowOutlineWhite from "../ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import styles from "./ButtonDefaultLogoRigth.module.scss";

const ButtonDefaultLogoRigth = (props) => (
  <div
    onClick={props.onClick}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className={styles.ButtonDefaultLogoRigth}
    data-testid="ButtonDefaultLogoRigth">
    <span>{props.title} </span>

    <p>
      <ButtonArrowOutlineWhite/>
    </p>
  </div>
);

export default ButtonDefaultLogoRigth;
