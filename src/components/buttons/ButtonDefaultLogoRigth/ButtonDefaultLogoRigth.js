import React from "react";
import styles from "./ButtonDefaultLogoRigth.module.scss";

const ButtonDefaultLogoRigth = (props) => (
  <div
    className={styles.ButtonDefaultLogoRigth}
    data-testid="ButtonDefaultLogoRigth"
  >
    <a href="http">{props.title} </a>

    <p>{props.image}</p>
  </div>
);

export default ButtonDefaultLogoRigth;
