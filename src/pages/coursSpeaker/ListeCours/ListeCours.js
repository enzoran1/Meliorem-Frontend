import React, { Fragment } from "react";
import styles from "./ListeCours.module.scss";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonActivity from "../../../components/buttons/ButtonActivity/ButtonActivity";
import ButtonDelete from "../../../components/buttons/ButtonDelete/ButtonDelete";
import ButtonEdit from "../../../components/buttons/ButtonEdit/ButtonEdit";
import ButtonFilterBorder from "../../../components/buttons/ButtonFilterBorder/ButtonFilterBorder";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";
import paginations from "../../../modules/Paginations";
import QuizCardCrud from "../../../components/quiz/QuizCardCrud/QuizCardCrud";
import Load from "../../../components/Load/Load";
import { getAllWithPageCourse, removeCourse } from "../../../modules/apis/CourseAPI";

const ListeCours = () => {

  const [cours, setCours] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshCours() {
    setIsLoading(true);
    getAllWithPageCourse(
      sessionStorage.getItem("token"),
      8,
      page,
      (coursFetched) => {
        setIsLoading(false);
        setCours(coursFetched.data);
        setTotalPage(coursFetched.totalPage);
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
    refreshCours();
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
    <div className={styles.ListeCours} data-testid="ListeCours">
      <div className={styles.ListeCours} data-testid="ListeCours">
        <div className={styles.ListeCours_Search}>
          <InputSearchComplex />
        </div>
        <div className={styles.ListeCours_Filter1}>
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
        <div className={styles.ListeCours_Filter2}>
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
        <div className={styles.ListeCours_Container}>
          { cours.map((cours,index) => (

          <QuizCardCrud
            key={index}
            title={cours.title}
            badges={
              <BadgeFilterSolid
                style={{ backgroundColor: cours.isPublic ? "green":"orange" }}
                title= {cours.isPublic ?"Public":"en cours"}
              />
            }
            description={cours.description}
            date={cours.publishDate}
            btnActivity={<ButtonActivity />}
            btnDelete={<ButtonDelete onClick={()=>{
              removeCourse(
                sessionStorage.getItem("token"),
                cours.id,
                (response) => {
                  refreshCours();
                },
                (error) => {
                  console.error(error);
                }
              );
            }} />}
            btnEdit={<ButtonEdit onClick={() => navigate(`/cours/edit/${cours.id}`)} />}
          />
          ))}          
          
          
        </div>
        <div className={styles.ListeCours_Pagination}>
           {pagination}
        </div>
      </div>
    </div>
    <div className={styles.BtnFixed}>
      <Link to="/templateAddCours">
      <ButtonFixedRigth
        bgBtn="#ffffff"
        style={{ backgroundColor: "#4F46E5" }}
      />
      </Link>
    </div>
  </Fragment>
);
}
ListeCours.propTypes = {};

ListeCours.defaultProps = {};

export default ListeCours;
