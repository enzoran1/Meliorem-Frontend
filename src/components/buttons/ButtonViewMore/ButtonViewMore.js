import React from "react";
import ButtonArrowOutlineWhite from "../ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import styles from "./ButtonViewMore.module.scss";

const ButtonViewMore = (props) => (
  <div
    onClick={props.onClick}
    className={styles.ButtonViewMore}
    data-testid="ButtonViewMore"
  >
    <span>{props.title} </span>
    <p>
      <ButtonArrowOutlineWhite />
    </p>
  </div>
);

ButtonViewMore.defaultProps = {
  title: "Voir plus",
};

export default ButtonViewMore;
