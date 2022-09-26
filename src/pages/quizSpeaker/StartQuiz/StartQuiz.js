import React from 'react';
import PropTypes from 'prop-types';
import styles from './StartQuiz.module.scss';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import { Link } from 'react-router-dom';

const StartQuiz = () => (
  <div className={styles.StartQuiz} data-testid="StartQuiz">
    <div className={styles.StartQuiz_Container}>

      <div className={styles.Container_Title}>
         <p>Le titre de mon quiz pour le test template</p>
      </div>

      <div className={styles.Container_Infos}>
        <p>Nombre de question : 12</p>
        <span>Temps quiz : 190s</span>
      </div>

      <div className={styles.Container_Button}>
        <Link to="/RunQuiz">
         <ButtonDefaultLogoRigth title="Commencer" />
        </Link>
         <ButtonDefaultLogoRigth isLeft title="Retour"/>



    </div>
  </div>
  </div>
);

StartQuiz.propTypes = {};

StartQuiz.defaultProps = {};

export default StartQuiz;
