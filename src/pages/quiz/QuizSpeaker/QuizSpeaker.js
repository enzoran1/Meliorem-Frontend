import React from "react";
import styles from "./QuizSpeaker.module.scss";
import CoursCardSpeaker from "../../../components/cours/CoursCardSpeaker/CoursCardSpeaker";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import imageAvatarTest from "../../../images/profil/image_profil.jpg";

const QuizSpeaker = () => (
  <div className={styles.QuizSpeaker} data-testid="QuizSpeaker">
    <div className={styles.QuizSpeaker_Container}>
      <div className={styles.QuizSpeaker_Header}>
        <div className={styles.Header_Top}>
          <p>En Cours</p>
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
      <div className={styles.QuizSpeaker_Body}>
        <div className={styles.Body_Top}>
          <p>Quiz</p>
        </div>
        <div className={styles.Body_Center}>
          <QuizView
            title="Le titre de mon quiz pour le test template"
            identity="Carlos Roberto"
            date="12/12/2020"
            numberQuestion="10"
            titleBadge="Expert"
            styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
            avatar={imageAvatarTest}
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
            titleBadge="Expert"
            styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
          />
          <QuizView
            title="Le titre de mon quiz pour le test template"
            identity="Carlos Roberto"
            date="12/12/2020"
            numberQuestion="10"
            titleBadge="Expert"
            styleBadge={{ backgroundColor: "red", cursor: "pointer" }}
          />
        </div>
        <div className={styles.Body_Bottom}>
          <ButtonViewMore />
        </div>
      </div>
      <div className={styles.QuizSpeaker_Footer}>
        <div className={styles.Footer_Top}>
          <p>Publié</p>
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

QuizSpeaker.propTypes = {};

QuizSpeaker.defaultProps = {};

export default QuizSpeaker;
