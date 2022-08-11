import React from "react";
import styles from "./QuizView.module.scss";
import BadgeFilterSolid from "../../badges/BadgeFilterSolid/BadgeFilterSolid";
import QuizTitleProgress from "../QuizTitleProgress/QuizTitleProgress";
import Testprogress from "../Testprogress/Testprogress";
import QuizAvatar from "../QuizAvatar/QuizAvatar";
import ButtonArrowSolid from "../../buttons/ButtonArrowSolid/ButtonArrowSolid";

const QuizView = (props) => {
  return (
    <div className={styles.QuizView} data-testid="QuizView">
      <div className={styles.QuizView_Header}>
        <h3> {props.title} </h3>
        <BadgeFilterSolid style={props.styleBadge} title={props.titleBadge} />
      </div>
      <div className={styles.QuizView_Number_Question}>
        <p>Questions : {props.numberQuestion}</p>
      </div>
      <div className={styles.QuizView_Body}>
        <div className={styles.Body_ProgressBar}>
          <p>
            <QuizTitleProgress title="Les tableaux" />
          </p>
          <Testprogress progress="70" />
        </div>

        <div className={styles.Body_ProgressBar}>
          <p>
            <QuizTitleProgress title="Les tableaux" />
          </p>
          <Testprogress progress="50" />
        </div>

        <div className={styles.Body_ProgressBar}>
          <p>
            <QuizTitleProgress title="Les tableaux" />
          </p>
          <Testprogress progress="30" />
        </div>

        <div className={styles.Body_ProgressBar}>
          <p>
            <QuizTitleProgress title="Les tableaux" />
          </p>
          <Testprogress progress="25" />
        </div>
      </div>

      <div className={styles.Footer}>
        <div className={styles.Footer_Container_Flex}>
          <div className={styles.Footer_Content_Right}>
            <div className={styles.Footer_Right_Avatar}>
              <QuizAvatar />
            </div>
            <div className={styles.Footer_Right_IdentityAndDate}>
              <h4>{props.identity}</h4>
              <p>{props.date}</p>
            </div>
          </div>
          <div className={styles.Footer_Content_Left}>
            <ButtonArrowSolid />
          </div>
        </div>
      </div>
    </div>
  );
};

QuizView.propTypes = {};

QuizView.defaultProps = {};

export default QuizView;
