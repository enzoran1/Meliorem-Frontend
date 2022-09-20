import React from "react";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import CoursCard from "../../../components/cours/CoursCard/CoursCard";
import CoursCardsProgress from "../../../components/cours/CoursCardsProgress/CoursCardsProgress";
import styles from "./CoursStudent.module.scss";
import ImageCours from "../../../images/image_cours.png";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import { Link } from "react-router-dom";
import Load from "../../../components/Load/Load";
import { getAllWithPageCourse } from "../../../modules/apis/CourseAPI";
import paginations from "../../../modules/Paginations";

const CoursStudent = () => {

  const [cours, setCours] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  

  function refreshCours() {
    setIsLoading(true);
    getAllWithPageCourse(
      sessionStorage.getItem("token"),
      4,
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
  <div className={styles.CoursStudent} data-testid="CoursStudent">
    <div className={styles.CoursStudent_Search}>
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
    <div className={styles.CoursStudent_Container}>
      <div className={styles.Container_Header}>
        <div className={styles.Header_Top}>
          <p>En cours</p>
        </div>
        <div className={styles.Header_Center}>
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
            progress="40"
            styleBadge={{ backgroundColor: "aqua" }}
            titleBadge="php"
            roundProgress={{ borderColor: "orange" }}
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
            progress="40"
            styleBadge={{ backgroundColor: "aqua" }}
            titleBadge="php"
            roundProgress={{ borderColor: "orange" }}
          />
        </div>
        <div className={styles.Header_Bottom}>
          <Link to="/liste-cours-etudiant">
            <ButtonViewMore />
          </Link>
        </div>
      </div>
      <div className={styles.Container_Body}>
        <div className={styles.Body_Top}>
          <p>Nouveau cours</p>
        </div>
        <div className={styles.Body_Center}>
          {cours.map((cours, index) => (
          <CoursCard
          key={index}
          title={cours.title}
          identity={cours.speakerName}
          date={cours.publishDate}
            image={ImageCours}
          />
          ))}
        
          
        </div>
        <div className={styles.Body_Bottom}>
          {pagination}
        </div>
      </div>
      <div className={styles.Container_Footer}>
        <div className={styles.Footer_Top}>
          <p>Finis</p>
        </div>
        <div className={styles.Footer_Center}>
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
            progress="100"
            styleBadge={{ backgroundColor: "#00b894" }}
            titleBadge="Scss"
            roundProgress={{ borderColor: "#00b894" }}
          />
        </div>
        <div className={styles.Footer_Bottom}>
          <Link to="/liste-cours-etudiant">
            <ButtonViewMore />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

}

CoursStudent.propTypes = {};

CoursStudent.defaultProps = {};

export default CoursStudent;
