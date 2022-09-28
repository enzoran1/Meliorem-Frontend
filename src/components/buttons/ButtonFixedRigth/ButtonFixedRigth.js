import React from "react";

import styles from "./ButtonFixedRigth.module.scss";

import LogoSave from "../../../images/logos/save.png";

const ButtonFixedRigth = (props) => {

let button;
if(props.top) {
button = 
<div
style={props.style}
onClick={props.onClick} 
 className={styles.ButtonFixedRigth__top}
 data-testid="ButtonFixedRigth">
  <img src={LogoSave} alt="LogoSave" />
</div>
} else {

button = 
<div
style={props.style}
onClick={props.onClick} 
 className={styles.ButtonFixedRigth__bottom}
 data-testid="ButtonFixedRigth">
  <svg
      enable-background="new 0 0 70 70"
      height="70px"
      id="Icons"
      version="1.1"
      viewBox="0 0 70 70"
      width="70px"
      fill={props.bgBtn}
    >
      <polygon points="53,32.5 37.5,32.5 37.5,17 32.5,17 32.5,32.5 17,32.5 17,37.5 32.5,37.5 32.5,53 37.5,53 37.5,37.5 53,37.5 " />
    </svg>
</div>
}

return button;
}

ButtonFixedRigth.propTypes = {};

ButtonFixedRigth.defaultProps = {};

export default ButtonFixedRigth;
