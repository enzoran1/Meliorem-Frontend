import React from "react";
import BadgeFilterSolid from "../../badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonArrowOutlinePurpel from "../../buttons/ButtonArrowOutlinePurpel/ButtonArrowOutlinePurpel";
import styles from "./CoursCardSpeaker.module.scss";

const CoursCardSpeaker = (props) => (
  <div className={styles.CoursCardSpeaker} data-testid="CoursCardSpeaker">
    <div className={styles.CoursCardSpeaker_Header}>
      <p>{props.title}</p>
      <BadgeFilterSolid style={props.style} title={props.titleBadge} />
    </div>
    <div className={styles.CoursCardSpeaker_Footer}>
      <div className={styles.Footer_Left}>
        <p>{props.date}</p>
        <BadgeFilterSolid
          style={props.style2}
          title={props.titleBadgeMatiere}
        />
      </div>
      <div className={styles.Footer_Right}>
        <ButtonArrowOutlinePurpel />
      </div>
    </div>
  </div>
);

CoursCardSpeaker.propTypes = {};

CoursCardSpeaker.defaultProps = {};

export default CoursCardSpeaker;
