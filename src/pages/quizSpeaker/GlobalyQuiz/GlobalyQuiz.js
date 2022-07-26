import React from "react";
import styles from "./GlobalyQuiz.module.scss";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import Load from "../../../components/Load/Load";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllPublishWithPage, getAllWithPageQuiz, removeQuiz } from "../../../modules/apis/QuizAPI";

const dateFormat = (date) => new Date(date).toLocaleDateString("fr-FR");

const GlobalyQuiz = (props) => {


  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [quiz, setquiz] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  let query = useQuery();

  function onSearchSubmit(text) {
    setSearch(text);
    if (text == "") {
      navigate("/liste-quiz-globaly");
      return;
    }
    navigate({
      pathname: "/liste-quiz-globaly",
      search: "?search=" + text,
    });
  }

  function refreshQuiz() {
    setIsLoading(true);
    console.log(search);
    getAllPublishWithPage(
      sessionStorage.getItem("token"),
      10,
      page,
      (quizFetched) => {
        setIsLoading(false);
        setquiz([...quizFetched.data]);
        setTotalPage(quizFetched.totalPage);
      },
      (error) => {
        console.error(error);
      },
      search === "" ? null : search
    );
  }
  function onChangePage(page) {
    setPage(page);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSearch(query.get("search"));
    }, 10);
    
    refreshQuiz();
  }, [page, search]
  );

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;



return(
  <div className={styles.GlobalyQuiz} data-testid="GlobalyQuiz">
    <div className={styles.GlobalyQuiz_Header}>
      {props.disableSearch ? null : <InputSearchComplex onSubmit={onSearchSubmit}/>}
    </div>
    <div className={styles.GlobalyQuiz_Body}>
      {quiz.map((quiz,index) => (
      <QuizView
        key={index}
        title={quiz.title}
        identity={quiz.speakerInfo.userName}
        date={dateFormat(quiz.createdAt)}
        numberQuestion={quiz.quizPartsCount}
        titleBadge="Expert"
        styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
      />
      ))}
    
    </div>
    <div className={styles.GlobalyQuiz_Footer}>
      {pagination}
    </div>
  </div>
);
}

GlobalyQuiz.propTypes = {};

GlobalyQuiz.defaultProps = {};

export default GlobalyQuiz;
