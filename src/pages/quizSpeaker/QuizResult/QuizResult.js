import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizResult.module.scss';
import InputCheck from '../../../components/quiz/InputCheck/InputCheck';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const QuizResult = () => (
  <div className={styles.QuizResult} data-testid="QuizResult">
    <div className={styles.QuizResult_Container}>
      <div className={styles.Container_Header}>
        <h1>Le titre de mon quiz</h1>
      </div>
      <div className={styles.Container_Body}>
        <div className={styles.Body_Left}>
              <p>Questions</p>
              <span>7/15</span>
              
        </div>
        <div className={styles.Body_Center}>
          <p>Expérience</p>
          <span>+ 50</span>
          
        </div>
        <div className={styles.Body_Right}>
          <p>Temps</p>
          <span>170s</span> 
          
        </div>
      </div>
      <div className={styles.Container_Footer}>
        <div className={styles.Footer_Header}>
          <div className={styles.Header_Question}>
          
          <span>1</span>
          <p>C'est la question a 1 million voir plus ?</p>
          </div>
          <div className={styles.Header_Reponse}>
             <InputCheck isRadio  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio correct title="une reponse un peu long car c'est des tests"/>
             <InputCheck isRadio  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio title="une reponse un peu long car c'est des tests"/>
          </div>
        </div>
        <div className={styles.Footer_Header}>
          <div className={styles.Header_Question}>
          <span>2</span>
          <p>Pourquoi je php c'est mieux que le js mais le js c'est mieux que php ?</p>
          </div>
          <div className={styles.Header_Reponse}>
             <InputCheck isRadio  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio title="une reponse un peu long car c'est des tests"/>
             <InputCheck isRadio correct  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio title="une reponse un peu long car c'est des tests"/>
          </div>
        </div>
        <div className={styles.Footer_Header}>
          <div className={styles.Header_Question}>
          <span>3</span>
          <p>Pourquoi je php c'est mieux que le js mais le js c'est mieux que php ?</p>
          </div>
          <div className={styles.Header_Reponse}>
             <InputCheck correct  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck title="une reponse un peu long car c'est des tests"/>
             <InputCheck  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck correct  title="une reponse un peu long car c'est des tests"/>
          </div>
        </div>
        <div className={styles.Footer_Header}>
          <div className={styles.Header_Question}>
          <span>4</span>
          <p>Pourquoi je php c'est mieux que le js mais le js c'est mieux que php ?</p>
          </div>
          <div className={styles.Header_Reponse}>
             <InputCheck isRadio correct  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio title="une reponse un peu long car c'est des tests"/>
             <InputCheck isRadio   title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck isRadio title="une reponse un peu long car c'est des tests"/>
          </div>
        </div>
        <div className={styles.Footer_Header}>
          <div className={styles.Header_Question}>
          <span>5</span>
          <p>Pourquoi je php c'est mieux que le js mais le js c'est mieux que php ? mais tu peu aussi faire une question trés longue pour tester le quiz d emeliorem?</p>
          </div>
          <div className={styles.Header_Reponse}>
             <InputCheck correct  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck title="une reponse un peu long car c'est des tests"/>
             <InputCheck correct  title="une reponse un peu long car c'est des tests donc faut bien tester donc je tests des reponse longue voir longue"/>
             <InputCheck   title="une reponse un peu long car c'est des tests"/>
          </div>
        </div>
      </div>
      <div className={styles.Container_Button}>
          <ButtonDefaultLogoRigth title="Suivant"/>
      </div>

  </div>
  </div>
);

QuizResult.propTypes = {};

QuizResult.defaultProps = {};

export default QuizResult;
