import React from "react";
import styles from "./QuizAdministrator.module.scss";
import { useNavigate } from "react-router-dom";
import { getAllWithPageQuiz, removeQuiz } from "../../../modules/apis/QuizAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import Load from "../../../components/Load/Load";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";

const QuizAdministrator = () => {
  const [quiz, setquiz] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshQuiz() {
    setIsLoading(true);

    getAllWithPageQuiz(
      sessionStorage.getItem("token"),
      5,
      page,
      (quizFetched) => {
        setIsLoading(false);
        setquiz(quizFetched.data);
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
      data={paginations(page, totalPage, 2)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;

  return (
    <div className={styles.QuizAdministrator} data-testid="QuizAdministrator">
      <TableAdmin titles={["user", "Title", "Description", "Date", "En ligne"]}>
        {quiz.map((quiz, index) => (
          <TableBody
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
            key={index}
            attributes={[
              "mon user",
              quiz.title,
              quiz.description,
              quiz.createdAt,
              quiz.public ? "oui" : "non",
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
