import React from "react";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Load from "../../../components/Load/Load";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import styles from "./QuizStudent.module.scss";
import { getAllWithPageQuiz } from "../../../modules/apis/QuizAPI";

const QuizStudent = () => {

  const [quiz, setQuiz] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
 

  function refreshQuiz() {
    setIsLoading(true);
    getAllWithPageQuiz(
      sessionStorage.getItem("token"),
      8,
      page,
    
      (quizFetched) => {
        setIsLoading(false);
        setQuiz(quizFetched.data);
        setTotalPage(quizFetched.totalPage);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  function onChangePage(page) {
    setPage(page);
  }

 

  React.useEffect(() => {
    refreshQuiz();
    // eslint-disable-next-line
  }, [page]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;





return(
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
      {pagination}
    </div>
  </div>
);
}

QuizStudent.propTypes = {};

QuizStudent.defaultProps = {};

export default QuizStudent;
