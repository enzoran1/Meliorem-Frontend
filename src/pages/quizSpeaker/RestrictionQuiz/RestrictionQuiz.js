import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestrictionQuiz.module.scss';
import ButtonAdd from '../../../components/buttons/ButtonAdd/ButtonAdd';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const RestrictionQuiz = () => (
  <div className={styles.RestrictionQuiz} data-testid="RestrictionQuiz">
  
    <div className={styles.RestrictionQuiz_Container}>
      <div className={styles.Container_Title}>
        <p>titre 1</p>
      <div className={styles.Container_Left}>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>
        <ButtonAdd title="nom de la personne la va"/>

      </div>
      </div>
      <div className={styles.Container_Title}>
        <p>titre 2</p>
      <div className={styles.Container_Right}>

      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>
      <ButtonAdd isSup title="nom de la personne la va"/>


      </div>
      </div>
    </div>

    <div className={styles.RestrictionQuiz_Container_Button}>
      <div className={styles.Button_Valider}>
    <ButtonDefaultLogoRigth  title="Valider"/>
    </div>
      <div className={styles.Button_Retour}>    
    <ButtonDefaultLogoRigth  title="Retour" isLeft/>
    </div>
    </div>
  </div>
);

RestrictionQuiz.propTypes = {};

RestrictionQuiz.defaultProps = {};

export default RestrictionQuiz;
