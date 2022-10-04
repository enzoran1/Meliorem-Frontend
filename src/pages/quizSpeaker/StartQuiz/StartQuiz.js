import React from 'react';
import PropTypes from 'prop-types';
import styles from './StartQuiz.module.scss';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getQuiz } from '../../../modules/apis/QuizAPI';
import Load from '../../../components/Load/Load';
import { performQuizContext } from '../../../contexts/performQuizContext';

const StartQuiz = (props) => {

  const [quiz, setQuiz] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  let navigate = useNavigate();

  let {id} = useParams();

  const performQuiz= React.useContext(performQuizContext);
  performQuiz.performInfo["id"] = id;
  performQuiz.performInfo["performing"] = [];

  React.useEffect(() => {
    getQuiz(id, sessionStorage.getItem('token'), (quizFetched) => {
      setQuiz(quizFetched);
      setLoading(false);
      performQuiz.performInfo["quiz"] = quizFetched;
    }, (error) => {
      console.error(error);
    });
  }, []);

  if (loading) {
    return <Load/>;
  }
  
  return (
  <div className={styles.StartQuiz} data-testid="StartQuiz">
    <div className={styles.StartQuiz_Container}>

      <div className={styles.Container_Title}>
         <p>{quiz.title}</p>
      </div>

      <div className={styles.Container_Infos}>
        <p>Nombre de question : {quiz.quizPartsCount}</p>
        <span>Temps quiz : {quiz.timeToPerformAll}</span>
      </div>

      <div className={styles.Container_Button}>
         <ButtonDefaultLogoRigth title="Commencer" onClick={()=>{navigate("/RunQuiz")}} />
         <ButtonDefaultLogoRigth isLeft title="Retour" onClick={()=>{navigate("/quizz")}}/>
      </div>
    </div>
  </div>
);
}

StartQuiz.propTypes = {};

StartQuiz.defaultProps = {};

export default StartQuiz;
