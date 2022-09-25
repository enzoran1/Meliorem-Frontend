import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonActivity from "../../../components/buttons/ButtonActivity/ButtonActivity";
import ButtonDelete from "../../../components/buttons/ButtonDelete/ButtonDelete";
import ButtonEdit from "../../../components/buttons/ButtonEdit/ButtonEdit";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Load from "../../../components/Load/Load";
import QuizCardCrud from "../../../components/quiz/QuizCardCrud/QuizCardCrud";
import paginations from "../../../modules/Paginations";
import styles from "./ListeQuiz.module.scss";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import { getMyQuiz } from "../../../modules/apis/SpeakerAPI";

const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");


const ListeQuiz = () => {

  const [quiz, setQuiz] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);


  function refreshQuiz() {
    setIsLoading(true);
    getMyQuiz(
      sessionStorage.getItem("token"),
      (quizFetched) => {
        setQuiz(quizFetched);
        setIsLoading(false);
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
  }, []);


  if (isLoading) return <Load />;

  // 8 quiz par page
  let totalPage = Math.ceil(quiz.length / 8);
  console.info(quiz);

  let quizData = quiz.slice((page - 1) * 8, page * 8);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );



return(
  <Fragment>
    <div className={styles.ListeQuiz} data-testid="ListeQuiz">
      <div className={styles.ListeQuiz_Search}>
        <InputSearchComplex />
      </div>
      <div className={styles.ListeQuiz_Container}>
        {
          quizData.map((quiz,index) => (
            <QuizCardCrud
              key={index}
              title= {quiz.title}	
              badges={
                
                <BadgeFilterSolid
                  style={{ backgroundColor: quiz.public ? "green" : "orange", cursor: "pointer" }}
                  title={quiz.public ? "Public" : "En cours"}
                />
              }
              description={quiz.description}
              date={formatDate(quiz.createdAt)}
              btnActivity={<ButtonActivity />}
              btnDelete={<ButtonDelete onClick="test" />}
              btnEdit={<ButtonEdit onClick="test" />}
            />
          ))
        }
      </div>
      <div className={styles.ListeQuiz_Pagination}>
        {pagination}
      </div>
    </div>
    <div className={styles.BtnFixed}>
      <Link to="/templateAddQuiz">
        <ButtonFixedRigth
          bgBtn="#ffffff"
          style={{ backgroundColor: "#4F46E5" }}
        />
      </Link>
    </div>
  </Fragment>
);
}

ListeQuiz.propTypes = {};

ListeQuiz.defaultProps = {};

export default ListeQuiz;
