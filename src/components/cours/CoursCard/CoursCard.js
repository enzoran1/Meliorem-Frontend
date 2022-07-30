import React from "react";
import styles from "./CoursCard.module.scss";
import QuizAvatar from "../../quiz/QuizAvatar/QuizAvatar";
import ButtonArrowSolid from "../../buttons/ButtonArrowSolid/ButtonArrowSolid";

const CoursCard = (props) => (
  <div className={styles.CoursCard} data-testid="CoursCard">
    <div className={styles.CoursCard_Header}>
        <img src={props.image} alt="" />
    </div>
    <div className={styles.CoursCard_Body}>
      <h3>{ props.title }</h3>
    </div>
    <div className={styles.CoursCard_Footer}>
         <div className={styles.Footer_Container_Flex}>
          <div className={styles.Footer_Content_Right}>
            <div className={styles.Footer_Right_Avatar}>
              <QuizAvatar/>
            </div>
            <div className={styles.Footer_Right_IdentityAndDate}>
              <h4>{props.identity}</h4>
              <p>{ props.date }</p>
            </div>
          </div>
          <div className={styles.Footer_Content_Left}>
              <ButtonArrowSolid/>
          </div>
        </div>
    </div>
  </div>
);

CoursCard.propTypes = {};

CoursCard.defaultProps = {};

export default CoursCard;
