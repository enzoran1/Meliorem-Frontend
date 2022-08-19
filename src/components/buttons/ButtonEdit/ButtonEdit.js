import React from "react";
import styles from "./ButtonEdit.module.scss";
import ButtonPencils from "../ButtonPencils/ButtonPencils";

const ButtonEdit = (props) => (
  <button
    onClick={props.onClick}
    className={styles.ButtonEdit}
    data-testid="ButtonEdit"
  >
    <span>{props.title}</span>
    <p>
      <ButtonPencils color="white" />
    </p>
  </button>
);

ButtonEdit.defaultProps = {
  title: "Modifier",
};

export default ButtonEdit;
