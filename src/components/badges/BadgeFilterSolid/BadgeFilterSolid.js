import React from "react";
import styles from "./BadgeFilterSolid.module.scss";

const BadgeFilterSolid = (props) => (
  <div className={styles.BadgeFilterSolid} data-testid="BadgeFilterSolid">
    <span
      onClick={props.onClick}
      className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded"
      style={props.style}
    >
      {props.title}
    </span>
  </div>
);

export default BadgeFilterSolid;
