import React, { useEffect } from "react";
import styles from "./QuizAdministrator.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllWithPageQuiz, removeQuiz } from "../../../modules/apis/QuizAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import Load from "../../../components/Load/Load";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const QuizAdministrator = (props) => {
  const [quiz, setquiz] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  let query = useQuery();
  
  const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");
  function onSearchSubmit(text){
    setSearch(text)
    if (text == "") {
      navigate("/quizz");
      return;
    }
    navigate({
      pathname: '/quizz',
      search: '?search='+text,
    })
  }

  function refreshQuiz() {
    setIsLoading(true);
    console.log(search)
    getAllWithPageQuiz(
      sessionStorage.getItem("token"),
      5,
      page,
      (quizFetched) => {
        setIsLoading(false);
        console.log(quizFetched.data);
        console.log(quiz);
        setquiz([...quizFetched.data]);
        setTotalPage(quizFetched.totalPage);
      },
      (error) => {
        console.error(error);
      }
       ,search ===""?null:search
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
    // eslint-disable-next-line
  }, [page,search]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 2)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;

  return (
    <div className={styles.QuizAdministrator} data-testid="QuizAdministrator">
      <TableAdmin titles={["user", "Title", "Date", "En ligne"]} onSearchSubmit={onSearchSubmit}>
        {quiz.map((quiz, index) => (
          <TableBody
          
            key={index}
            onClickView={() => {
              navigate(`/quiz/view/${quiz.id}`);
            }}
            onClickEdit={() => navigate(`/quiz/edit/${quiz.id}`)}
            onClickDelete={() => {
              removeQuiz(
                sessionStorage.getItem("token"),
                quiz.id,
                (response) => refreshQuiz(this),
                (error) => console.error(error)
              );
            }}
            attributes={[
              quiz.speakerInfo.userName,
              quiz.title,
              formatDate(quiz.createdAt),
              quiz.public ? <BadgeFilterSolid
              style={{ backgroundColor: "green" }}
              title="en ligne"
            /> : <BadgeFilterSolid
            style={{ backgroundColor: "red" }}
            title="hors ligne"
          />,
            ]}
          />
        ))}
      </TableAdmin>
      <div className={styles.Pagination_Container}>{pagination}</div>
    </div>
  );
};
QuizAdministrator.propTypes = {};

QuizAdministrator.defaultProps = {};

export default QuizAdministrator;
