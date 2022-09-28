import React from 'react';
import styles from './QuizRun.module.scss';
import ButtonArrowOutlinePurpelRotade from '../../../components/buttons/ButtonArrowOutlinePurpelRotade/ButtonArrowOutlinePurpelRotade';
import Testprogress from '../../../components/quiz/Testprogress/Testprogress';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const QuizRun = () => {

 
 
  

 

return(
  <div className={styles.QuizRun} data-testid="QuizRun">
    <div className={styles.QuizRun_Container}>
      <div className={styles.Container_Header}>
        <div className={styles.Header_Left}>
           <ButtonArrowOutlinePurpelRotade/>
           <p>La question du quiz pour le teste du quiz de ta mére en slip la chauve devant la télé ton pére le plombié qui à la ré ouverte ?</p>
        </div>
        <div className={styles.Header_Right}>
          <div className={styles.Header_Right_Top}>
          <p>Question 1/10</p>
          <span>Temps global : 350s</span>
          </div>
          <div className={styles.Header_Right_Bottom}>
            <p>temps question : 15s</p>
          </div>
        </div>
      </div>
      <div className={styles.Container_ProgressBar}>
        <Testprogress progress="50"/>
      </div>
      <div className={styles.Container_Body}>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>

      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
      <div className="form-check">
          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
            La bonne reponse
          </label>
      </div>
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
