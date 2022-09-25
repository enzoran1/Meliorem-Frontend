import React from "react";
import styles from "./Load.module.scss";
import LogoMelio from "../../images/logos/logomelo.png";

const Load = () => (
  <div className={styles.Load} data-testid="Load">
    <div
      className={`spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 ${styles.Load_Spinner}`}
      role="status"
    >
      <img src={LogoMelio} alt="" />
  

    </div>
  </div>
);

Load.propTypes = {};

Load.defaultProps = {};

export default Load;
