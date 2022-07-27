import React from "react";
import styles from "./ButtonSwitch.module.scss";

const ButtonSwitch = () => (
  <div className={styles.ButtonSwitch} data-testid="ButtonSwitch">
    <div className="form-check form-switch">
      <input
        className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
    </div>
  </div>
);

export default ButtonSwitch;
