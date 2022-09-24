import React from "react";

import ButtonArrowOutlineWhite from "../ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import styles from "./ButtonDefaultLogoRigth.module.scss";
import ButtonArrowLeft from '../../../components/buttons/ButtonArrowLeft/ButtonArrowLeft';

const ButtonDefaultLogoRigth = (props) => {
  let button;
  if (props.isLeft) 
    button = 
    <div  style={props.style} className={styles.ButtonDefaultLogoLeft}>
        <p>
          <ButtonArrowLeft />
        </p>
      <span>{props.title} </span>
    </div>
  else
    button = <div  style={props.style} className={styles.ButtonDefaultLogoRigth}>
              <span>{props.title} </span>
                <p>
                  <ButtonArrowOutlineWhite />
                </p>
              </div>
  
  
  return (
  <button
    onClick={props.onClick}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    data-testid="ButtonDefaultLogoRigth"
    style={props.style}
   
  >
    {button}
  </button>
)};



export default ButtonDefaultLogoRigth;



