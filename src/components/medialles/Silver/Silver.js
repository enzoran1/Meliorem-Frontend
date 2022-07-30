import React from "react";
import styles from "./Silver.module.scss";
import Logo from "../../../images/medialles/Silver.png";

const Silver = (props) => (
  <div className={styles.Silver} data-testid="Silver">
    <img src={Logo} alt="" />
  </div>
);

Silver.propTypes = {};

Silver.defaultProps = {};

export default Silver;
