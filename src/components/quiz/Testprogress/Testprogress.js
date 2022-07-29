import React from "react";
import styles from "./Testprogress.module.scss";

const Testprogress = (props) => {
  return (
    <div className={styles.Testprogress} data-testid="Testprogress">
      <div className={`w-full rounded-full ${styles.Testprogress__content}`}>
        <div
          className={`text-xs font-medium text-center p-0.5 leading-none rounded-l-full ${styles.Testprogress__progress}`}
          style={{ width: `${props.progress}%` }}
        >
          {props.progress}%
        </div>
      </div>
    </div>
  );
};

Testprogress.propTypes = {};

Testprogress.defaultProps = {};

export default Testprogress;
