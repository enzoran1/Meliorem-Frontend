import React from 'react';
import styles from './QuizRun.module.scss';
import ButtonArrowOutlinePurpelRotade from '../../../components/buttons/ButtonArrowOutlinePurpelRotade/ButtonArrowOutlinePurpelRotade';
import Testprogress from '../../../components/quiz/Testprogress/Testprogress';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import { performQuizContext } from '../../../contexts/performQuizContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Load from '../../../components/Load/Load';

const QuizRun = () => { 

  const [step , setStep] = React.useState(9);
  const [timeTotal , setTimeTotal] = React.useState(0);
  const [timeQuestion , setTimeQuestion] = React.useState(0);
  const navigate = useNavigate();


  let performQuiz = React.useContext(performQuizContext);
  let quiz = performQuiz.performInfo["quiz"];
  let id = performQuiz.performInfo["id"];
  let performing = performQuiz.performInfo["performing"];

  useEffect(() => {
    if (!quiz)
      navigate('/quizz');
    setTimeTotal(quiz.timeToPerformAll);
  }, []);

  useEffect(() => {
    setTimeQuestion(quiz.quizParts[step].timeToPerform);
  }, [step]);

  if (!quiz) {
    return <Load/>;
  }

  console.log( "test : " , JSON.parse(quiz.quizParts[step].answer));

return(
  <div className={styles.QuizRun} data-testid="QuizRun">
    <div className={styles.QuizRun_Container}>
      <div className={styles.Container_Header}>
        <div className={styles.Header_Left}>
           <ButtonArrowOutlinePurpelRotade/>
           <p>{quiz.quizParts[step].question}</p>
        </div>
        <div className={styles.Header_Right}>
          <div className={styles.Header_Right_Top}>
          <p>Question {`${step+1}/${quiz.quizPartsCount}`}</p>
          <span>Temps global : {timeTotal}s</span>
          </div>
          <div className={styles.Header_Right_Bottom}>
            <p>temps question : {timeQuestion}s</p>
          </div>
        </div>
      </div>
      <div className={styles.Container_ProgressBar}>
        <Testprogress progress={((step+1)/quiz.quizPartsCount)*100}/>
      </div>
      <div className={styles.Container_Body}>
    {JSON.parse(quiz.quizParts[step].answer).map((answer, index) => {
      return quiz.quizParts[step].choice == "radio" ? 
      <div className="form-check">
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
          {answer.text}
        </label>
      </div>
      :
      <div className="form-check">
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexCheckChecked" id="flexCheckChecked1"/>
        <label className="form-check-label inline-block text-gray-800" for="flexCheckChecked1">
          {answer.text}
        </label>
      </div>
  })}
        

      </div>
      <div className={styles.Container_Footer}>
        <ButtonDefaultLogoRigth title="Suivant"/>
      </div>
    </div>
  </div>
);
}

QuizRun.propTypes = {};

QuizRun.defaultProps = {};

export default QuizRun;
