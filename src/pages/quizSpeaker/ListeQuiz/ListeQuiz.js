import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonActivity from "../../../components/buttons/ButtonActivity/ButtonActivity";
import ButtonDelete from "../../../components/buttons/ButtonDelete/ButtonDelete";
import ButtonEdit from "../../../components/buttons/ButtonEdit/ButtonEdit";
import ButtonFilterBorder from "../../../components/buttons/ButtonFilterBorder/ButtonFilterBorder";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Load from "../../../components/Load/Load";
import QuizCardCrud from "../../../components/quiz/QuizCardCrud/QuizCardCrud";
import paginations from "../../../modules/Paginations";
import styles from "./ListeQuiz.module.scss";
import { getAllWithPageQuiz } from "../../../modules/apis/QuizAPI";
import Pagination from "../../../components/pagination/Pagination/Pagination";

const ListeQuiz = () => {

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
  <Fragment>
    <div className={styles.ListeQuiz} data-testid="ListeQuiz">
      <div className={styles.ListeQuiz_Search}>
        <InputSearchComplex />
      </div>
      <div className={styles.ListeQuiz_Filter1}>
        <ButtonFilterBorder
          onClick="test"
          style={{ borderColor: "orange", cursor: "pointer" }}
          title="mon button"
        />
        <ButtonFilterBorder
          onClick="test"
          style={{ borderColor: "green", cursor: "pointer" }}
          title="mon button"
        />
        <ButtonFilterBorder
          onClick="test"
          style={{ borderColor: "yellow", cursor: "pointer" }}
          title="mon button"
        />
        <ButtonFilterBorder
          onClick="test"
          style={{ borderColor: "blue", cursor: "pointer" }}
          title="mon button"
        />
      </div>
      <div className={styles.ListeQuiz_Filter2}>
        <BadgeFilterSolid
          style={{ backgroundColor: "orange", cursor: "pointer" }}
          title="Python"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "green", cursor: "pointer" }}
          title="Linux"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "gray", cursor: "pointer" }}
          title="Docker"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "red", cursor: "pointer" }}
          title="React"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "black", cursor: "pointer" }}
          title="Angular"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "blue", cursor: "pointer" }}
          title="Php"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "aqua", cursor: "pointer" }}
          title="C++"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "coral", cursor: "pointer" }}
          title="Javascript"
        />
      </div>
      <div className={styles.ListeQuiz_Container}>
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
        <QuizCardCrud
          title=" le titre de mon quiz qui est tres long"
          badges={
            <BadgeFilterSolid
              style={{ backgroundColor: "orange", cursor: "pointer" }}
              title="en cours"
            />
          }
          description="la description de mon quiz qui est tres longue pour voir comment ca va se comporter"
          date="12/12/2020"
          btnActivity={<ButtonActivity />}
          btnDelete={<ButtonDelete onClick="test" />}
          btnEdit={<ButtonEdit onClick="test" />}
        />
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
