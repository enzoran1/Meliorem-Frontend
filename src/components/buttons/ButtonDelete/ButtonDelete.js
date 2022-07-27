import React from "react";
import styles from "./ButtonDelete.module.scss";
import ButtonCross from "../ButtonCross/ButtonCross";

const ButtonDelete = (props) => (
  <div
    onClick={props.onClick}
    className={styles.ButtonDelete}
    data-testid="ButtonDelete"
  >
    <span>{props.title}</span>
    <p>
      <ButtonCross color="white" />
    </p>
  </div>
);

ButtonDelete.defaultProps = {
  title: "Supprimer",
};

export default ButtonDelete;
