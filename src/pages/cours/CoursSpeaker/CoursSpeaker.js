import React from "react";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import CoursCard from "../../../components/cours/CoursCard/CoursCard";
import styles from "./CoursSpeaker.module.scss";
import ImageCours from "../../../images/image_cours.png";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import CoursCardSpeaker from "../../../components/cours/CoursCardSpeaker/CoursCardSpeaker";

const CoursSpeaker = () => (
  <div className={styles.CoursSpeaker} data-testid="CoursSpeaker">
    <div className={styles.CoursSpeaker_Search}>
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
    <div className={styles.CoursSpeaker_Container}>
      <div className={styles.Container_Header}>
        <div className={styles.Header_Top}>
          <p>En cours</p>
        </div>
        <div className={styles.Header_Center}>
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "orange" }}
            style2={{ backgroundColor: "aqua" }}
            titleBadge="En cours"
            titleBadgeMatiere="C++"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "orange" }}
            style2={{ backgroundColor: "red" }}
            titleBadge="En cours"
            titleBadgeMatiere="Java"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "orange" }}
            style2={{ backgroundColor: "violet" }}
            titleBadge="En cours"
            titleBadgeMatiere="Php"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "orange" }}
            style2={{ backgroundColor: "blue" }}
            titleBadge="En cours"
            titleBadgeMatiere="javascript"
            date="12/12/2020"
          />
        </div>
        <div className={styles.Header_Bottom}>
          <ButtonViewMore />
        </div>
      </div>
      <div className={styles.Container_Body}>
        <div className={styles.Body_Top}>
          <p>Nouveau cours</p>
        </div>
        <div className={styles.Body_Center}>
          <CoursCard
            title="Le titre de mon cours pour le test template de la mort mec des angular"
            identity="Carlos Roberto"
            date="12/12/2020"
            image={ImageCours}
          />
          <CoursCard
            title="Le titre de mon cours pour le test template de la mort mec des angular"
            identity="Carlos Roberto"
            date="12/12/2020"
            image={ImageCours}
          />
          <CoursCard
            title="Le titre de mon cours pour le test template de la mort mec des angular"
            identity="Carlos Roberto"
            date="12/12/2020"
            image={ImageCours}
          />
          <CoursCard
            title="Le titre de mon cours pour le test template de la mort mec des angular"
            identity="Carlos Roberto"
            date="12/12/2020"
            image={ImageCours}
          />
        </div>
        <div className={styles.Body_Bottom}>
          <Pagination />
        </div>
      </div>
      <div className={styles.Container_Footer}>
        <div className={styles.Footer_Top}>
          <p>Publier</p>
        </div>
        <div className={styles.Footer_Center}>
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "green" }}
            style2={{ backgroundColor: "aqua" }}
            titleBadge="Publié"
            titleBadgeMatiere="C++"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "green" }}
            style2={{ backgroundColor: "red" }}
            titleBadge="Publié"
            titleBadgeMatiere="Java"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "green" }}
            style2={{ backgroundColor: "violet" }}
            titleBadge="Publié"
            titleBadgeMatiere="Php"
            date="12/12/2020"
          />
          <CoursCardSpeaker
            title="Le titre de mon quiz voila"
            style={{ backgroundColor: "green" }}
            style2={{ backgroundColor: "blue" }}
            titleBadge="Publié"
            titleBadgeMatiere="javascript"
            date="12/12/2020"
          />
        </div>
        <div className={styles.Footer_Bottom}>
          <ButtonViewMore />
        </div>
      </div>
    </div>
  </div>
);

CoursSpeaker.propTypes = {};

CoursSpeaker.defaultProps = {};

export default CoursSpeaker;
