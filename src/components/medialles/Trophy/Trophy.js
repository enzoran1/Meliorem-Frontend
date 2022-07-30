import React from "react";
import styles from "./Trophy.module.scss";
import Logo from "../../../images/medialles/Trophy.png";

const Trophy = () => (
  <div className={styles.Trophy} data-testid="Trophy">
    <img src={Logo} alt="" />
  </div>
);

Trophy.propTypes = {};

Trophy.defaultProps = {};

export default Trophy;
