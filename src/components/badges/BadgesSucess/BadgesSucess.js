import React from "react";
import ButtonArrowOutlineWhite from "../../buttons/ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import ClassementBadges from "../../classement/ClassementBadges/ClassementBadges";

import styles from "./BadgesSucess.module.scss";

const BadgesSucess = (props) => (
  <div className={styles.BadgesSucess} data-testid="BadgesSucess">
    <div className={styles.BadgesSucess_Header}>
      <div className={styles.Header_Right}>
        <ClassementBadges image={props.image} />
        <p>{props.title}</p>
      </div>
      <div className={styles.Header_Left}>{props.trophy}</div>
    </div>
    <div className={styles.BadgesSucess_Footer}>
      <div className={styles.Footer_Right}>
        <p>{props.description}</p>
      </div>
      <div className={styles.Footer_Left}>
        <ButtonArrowOutlineWhite />
      </div>
    </div>
  </div>
);

BadgesSucess.propTypes = {};

BadgesSucess.defaultProps = {};

export default BadgesSucess;
