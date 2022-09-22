import React from "react";

import styles from "./ListeCours.module.scss";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import CoursCardsProgress from "../../../components/cours/CoursCardsProgress/CoursCardsProgress";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";
import paginations from "../../../modules/Paginations";
import { getAllWithPageCourse } from "../../../modules/apis/CourseAPI";

const ListeCours = () => {

  const [cours, setCours] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
   
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
  <div className={styles.ListeCours} data-testid="ListeCours">
    <div className={styles.ListeCours_Search}>
      <div className={styles.Search_Top}>
        <InputSearchComplex />
      </div>
      <div className={styles.Search_Bottom}>
        <BadgeFilterSolid
          style={{ backgroundColor: "aqua", cursor: "pointer" }}
          title="Gsap"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "orange", cursor: "pointer" }}
          title="Vue"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "red", cursor: "pointer" }}
          title="Python"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "green", cursor: "pointer" }}
          title="Javascript"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "gray", cursor: "pointer" }}
          title="Angular"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "blue", cursor: "pointer" }}
          title="React"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "violet", cursor: "pointer" }}
          title="Scss"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "black", cursor: "pointer" }}
          title="php"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "cadetblue", cursor: "pointer" }}
          title="css"
        />
      </div>
    </div>
    <div className={styles.ListeCours_Container}>
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="15"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "red" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="100"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "#00b894" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="40"
        styleBadge={{ backgroundColor: "aqua" }}
        titleBadge="php"
        roundProgress={{ borderColor: "orange" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="100"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "#00b894" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="15"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "red" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="100"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "#00b894" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="100"
        styleBadge={{ backgroundColor: "#00b894" }}
        titleBadge="Scss"
        roundProgress={{ borderColor: "#00b894" }}
      />
      <CoursCardsProgress
        user="Jeremy Bargade"
        title="Le scss pour les nuls et les trés nuls"
        date="25/05/2022"
        progress="40"
        styleBadge={{ backgroundColor: "aqua" }}
        titleBadge="php"
        roundProgress={{ borderColor: "orange" }}
      />
    </div>
    <div className={styles.ListeCours_Pagination}>
      {pagination}
    </div>
  </div>
);    
}

ListeCours.propTypes = {};

ListeCours.defaultProps = {};

export default ListeCours;
