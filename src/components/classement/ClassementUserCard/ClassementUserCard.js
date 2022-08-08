import React from "react";
import styles from "./ClassementUserCard.module.scss";
import QuizAvatar from "../../quiz/QuizAvatar/QuizAvatar";
import ButtonArrawSolid from "../../buttons/ButtonArrowSolid/ButtonArrowSolid";

const ClassementUserCard = (props) => (
  <div className={styles.ClassementUserCard} data-testid="ClassementUserCard">
    <div className={styles.ClassementUserCard_Header}>
      <div className={styles.Header_Left}>
        <div className={styles.Header_Left_Image}>
          <QuizAvatar />
        </div>
        <div className={styles.Header_Left_Identity}>
          <h3>{props.name}</h3>
          <p>{props.promotion}</p>
        </div>
      </div>
      <div className={styles.Header_Right}>{props.medaille}</div>
    </div>
    <div className={styles.ClassementUserCard_Footer}>
      <div className={styles.Footer_Left}>
        <p>Badges</p>
        <div className={styles.Footer_Left_Medailles}>
          {props.imageFooters.map((imageFooter, index) => (
            <div key={index}>{imageFooter}</div>
          ))}
        </div>
      </div>
      <div className={styles.Footer_Right}>
        <ButtonArrawSolid />
      </div>
    </div>
  </div>
);

ClassementUserCard.propTypes = {};

ClassementUserCard.defaultProps = {};

export default ClassementUserCard;
