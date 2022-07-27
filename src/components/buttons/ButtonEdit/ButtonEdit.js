import React from "react";
import styles from "./ButtonEdit.module.scss";
import ButtonPencils from "../ButtonPencils/ButtonPencils";

const ButtonEdit = (props) => (
  <div
    onClick={props.onClick}
    className={styles.ButtonEdit}
    data-testid="ButtonEdit"
  >
    <span>{props.title}</span>
    <p>
      <ButtonPencils color="white" />
    </p>
  </div>
);

ButtonEdit.defaultProps = {
  title: "Modifier",
};

export default ButtonEdit;
