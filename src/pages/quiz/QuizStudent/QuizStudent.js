import React from "react";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import styles from "./QuizStudent.module.scss";

const QuizStudent = () => (
  <div className={styles.QuizStudent} data-testid="QuizStudent">
    <div className={styles.QuizStudent_Header}>
      <InputSearchComplex />
      <div className={styles.Header_Filter}>
        <BadgeFilterSolid style={{ backgroundColor: "orange", cursor: "pointer" }}
          title="Python" />
        <BadgeFilterSolid style={{ backgroundColor: "green", cursor: "pointer" }}
          title="Linux" />
        <BadgeFilterSolid style={{ backgroundColor: "gray", cursor: "pointer" }}
          title="Docker" />
        <BadgeFilterSolid style={{ backgroundColor: "red", cursor: "pointer" }}
          title="React" />
        <BadgeFilterSolid style={{ backgroundColor: "black", cursor: "pointer" }}
          title="Angular" />
        <BadgeFilterSolid style={{ backgroundColor: "blue", cursor: "pointer" }}
          title="Php" />
        <BadgeFilterSolid style={{ backgroundColor: "aqua", cursor: "pointer" }}
          title="C++" />
        <BadgeFilterSolid style={{ backgroundColor: "coral", cursor: "pointer" }}
        title="Javascript"/>
      </div>
    </div>
    <div className={styles.QuizStudent_Body}>
      <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Expert"
        styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Intermediére"
        styleBadge={{ backgroundColor: "orange", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Débutant"
        styleBadge={{ backgroundColor: "green", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Expert"
        styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Intermediére"
        styleBadge={{ backgroundColor: "orange", cursor: "pointer" }}
      />
      <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Débutant"
        styleBadge={{ backgroundColor: "green", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Intermediére"
        styleBadge={{ backgroundColor: "orange", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Expert"
        styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
      />
       <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Intermediére"
        styleBadge={{ backgroundColor: "orange", cursor: "pointer" }}
      />
     <QuizView
        title="Le titre de mon quiz pour le test template"
        identity="Carlos Roberto"
        date="12/12/2020"
        numberQuestion="10"
        titleBadge="Débutant"
        styleBadge={{ backgroundColor: "green", cursor: "pointer" }}
      />
    </div>
    <div className={styles.QuizStudent_Footer}>
      <Pagination/>
    </div>
  </div>
);

QuizStudent.propTypes = {};

QuizStudent.defaultProps = {};

export default QuizStudent;
