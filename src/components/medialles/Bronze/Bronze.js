import React from "react";
import styles from "./Bronze.module.scss";
import Logo from "../../../images/medialles/Bronze.png";

const Bronze = () => (
  <div className={styles.Bronze} data-testid="Bronze">
    <img src={Logo} alt="" />
  </div>
);

Bronze.propTypes = {};

Bronze.defaultProps = {};

export default Bronze;
