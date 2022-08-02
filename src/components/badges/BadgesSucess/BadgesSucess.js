import React from "react";
import ButtonArrowOutlineWhite from "../../buttons/ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import ClassementBadges from "../../classement/ClassementBadges/ClassementBadges";

import styles from "./BadgesSucess.module.scss";
import Badges1 from "../../../images/classement/badge1.png";
import Trophy from "../../medialles/Trophy/Trophy";

const BadgesSucess = (props) => (
  <div className={styles.BadgesSucess} data-testid="BadgesSucess">
    <div className={styles.BadgesSucess_Header}>
      <div className={styles.Header_Right}>
        <ClassementBadges image={ Badges1 } />
        <p>{ props.title }</p>
      </div>
      <div className={styles.Header_Left}>
        <Trophy/>
      </div> 
    </div>
    <div className={styles.BadgesSucess_Footer}>
      <div className={styles.Footer_Right}>
        <p>{ props.description }</p>
      </div>
      <div className={styles.Footer_Left}>
        <ButtonArrowOutlineWhite/>
      </div>
    </div>
  </div>
);

BadgesSucess.propTypes = {};

BadgesSucess.defaultProps = {};

export default BadgesSucess;
