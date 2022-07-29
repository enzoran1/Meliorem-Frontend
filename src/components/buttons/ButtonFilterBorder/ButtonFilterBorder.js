import React from "react";
import styles from "./ButtonFilterBorder.module.scss";

const ButtonFilterBorder = (props) => (
  <div className={styles.ButtonFilterBorder} data-testid="ButtonFilterBorder">
    <button
      onClick={props.onClick}
      type="button"
      style={props.style}
      class="inline-block px-6 py-2 border-2 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.title}
    </button>
  </div>
);

export default ButtonFilterBorder;
