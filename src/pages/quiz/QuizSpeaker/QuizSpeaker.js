import React, { useEffect } from "react";
import styles from "./QuizSpeaker.module.scss";
import CoursCardSpeaker from "../../../components/cours/CoursCardSpeaker/CoursCardSpeaker";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import imageAvatarTest from "../../../images/profil/image_profil.jpg";
import { Link, useNavigate } from "react-router-dom";
import { getMyQuiz } from "../../../modules/apis/SpeakerAPI";

const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");

const QuizSpeaker = () => {
  const [quiz, setQuiz] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyQuiz(sessionStorage.getItem("token"), (quiz) => {
      setQuiz(quiz);
    });
  }, []);

  console.log(quiz)
  let quizPublic = [];
  let quizPrivate = [];
  quiz.forEach(quiz =>(quiz.public?quizPublic:quizPrivate).push(quiz));
  console.log("public : " , quizPublic)
  console.log("private : " , quizPrivate)

  quizPublic = quizPublic.slice(0, 6);
  quizPrivate = quizPrivate.slice(0, 6);


  return (
    <div className={styles.QuizSpeaker} data-testid="QuizSpeaker">
      <div className={styles.QuizSpeaker_Container}>
        <div className={styles.QuizSpeaker_Header}>
          <div className={styles.Header_Top}>
            <p>En Cours</p>
          </div>
          <div className={styles.Header_Center}>
            {quizPrivate.map((quiz,index) => (
              <CoursCardSpeaker
              key={index}
              title={quiz.title}
              style={{ backgroundColor: "orange" }}
              style2={{ backgroundColor: "#556bda" }}
              titleBadge="En cours"
              titleBadgeMatiere={quiz.theme}
              date={formatDate(quiz.createdAt)}
            />
            ))}
            
          </div>
          <div className={styles.Header_Bottom}>
            <Link to="/liste-quiz-intervenant">
              <ButtonViewMore />
            </Link>
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
              onClickArrowButton={() => navigate("/StartQuiz/1")}
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
            <Link to="/liste-quiz-globaly-intervenant">
              <ButtonViewMore />
            </Link>
          </div>
        </div>
        <div className={styles.QuizSpeaker_Footer}>
          <div className={styles.Footer_Top}>
            <p>Publié</p>
          </div>
          <div className={styles.Footer_Center}>
            
          {quizPublic.map((quiz,index) => (
              <CoursCardSpeaker
              key={index}
              title={quiz.title}
              style={{ backgroundColor: "green" }}
              style2={{ backgroundColor: "#556bda" }}
              titleBadge="Publié"
              titleBadgeMatiere={quiz.theme}
              date={formatDate(quiz.createdAt)}
            />
            ))}
            
          </div>

          <div className={styles.Footer_Bottom}>
            <Link to="/liste-quiz-intervenant">
              <ButtonViewMore />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizSpeaker.propTypes = {};

QuizSpeaker.defaultProps = {};

export default QuizSpeaker;
