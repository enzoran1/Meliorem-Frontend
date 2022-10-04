import React, { useEffect } from "react";
import styles from "./QuizSpeaker.module.scss";
import CoursCardSpeaker from "../../../components/cours/CoursCardSpeaker/CoursCardSpeaker";
import QuizView from "../../../components/quiz/QuizView/QuizView";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import imageAvatarTest from "../../../images/profil/image_profil.jpg";
import { Link, useNavigate } from "react-router-dom";
import { getMyQuiz } from "../../../modules/apis/SpeakerAPI";
import { getAllPublishWithPage } from "../../../modules/apis/QuizAPI";

const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");

const QuizSpeaker = () => {
  const [quiz, setQuiz] = React.useState([]);
  const [personnalQuiz, setPersonnalQuiz] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyQuiz(sessionStorage.getItem("token"), (quiz) => {
      setPersonnalQuiz(quiz);
    });
    getAllPublishWithPage( sessionStorage.getItem("token"), 4, 1, (quizFetched) => {
      setQuiz([...quizFetched.data]);
    });
  }, []);



  console.log(quiz)
  let quizPublic = [];
  let quizPrivate = [];
  personnalQuiz.forEach(quiz =>(quiz.public?quizPublic:quizPrivate).push(quiz));
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


            {quiz.map((quiz,index) => (
            <QuizView
              key={index}
              title={quiz.title}
              identity={quiz.speakerInfo.userName}
              date={formatDate(quiz.createdAt)}
              numberQuestion={quiz.quizPartsCount}
              avatar={imageAvatarTest}
              onClickArrowButton={() => navigate("/StartQuiz/" + quiz.id)}
            />
            ))}
            
          </div>
          <div className={styles.Body_Bottom}>
            <Link to="/liste-quiz-globaly">
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
