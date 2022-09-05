import React, { Fragment } from "react";
import styles from "./FormContainer.module.scss";
import LogoMelo from "../../../../images/logos/logomelo.png";

const FormContainer = (props) => (
  <Fragment>
    <form
      onSubmit={props.onSubmit}
      className={styles.Container__Form}
      noValidate
    >
      <div className={styles.Form_Logo}>
        <img src={LogoMelo} alt="" />
      </div>
      <div className={styles.Form_Title}>
        <p>{props.titleForm}</p>
      </div>
      <div className={styles.Form_Input}>{props.children}</div>
      <div className={styles.Form_Btn}></div>
    </form>
  </Fragment>
);

export default FormContainer;
