import React from "react";

import styles from "./CoursCardsProgress.module.scss";
import CoursRoundProgress from "../CoursRoundProgress/CoursRoundProgress";
import BadgeFilterSolid from "../../badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonArrowOutlinePurpel from "../../buttons/ButtonArrowOutlinePurpel/ButtonArrowOutlinePurpel";

const CoursCardsProgress = (props) => (
  <div className={styles.CoursCardsProgress} data-testid="CoursCardsProgress">
    <div className={styles.CoursCardsProgress_Header}>
      <div className={styles.Header_Left}>
        <h3>{props.user}</h3>
        <p>{props.title}</p>
      </div>
      <div className={styles.Header_Right}>
        <CoursRoundProgress
          title={props.progress}
          roundProgress={props.roundProgress}
        />
      </div>
    </div>
    <div className={styles.CoursCardsProgress_Footer}>
      <div className={styles.Footer_Left}>
        <p>{props.date}</p>
        <BadgeFilterSolid title={props.titleBadge} style={props.styleBadge} />
      </div>
      <div className={styles.Footer_Right}>
        <ButtonArrowOutlinePurpel />
      </div>
    </div>
  </div>
);

CoursCardsProgress.propTypes = {};

CoursCardsProgress.defaultProps = {};

export default CoursCardsProgress;
