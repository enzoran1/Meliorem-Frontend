import React from 'react';
import styles from './NewQuiz.module.scss';
import BadgeFilterSolid from '../../../components/badges/BadgeFilterSolid/BadgeFilterSolid';
import Resume from '../../../components/cours/coursCompenentSpeaker/Resume/Resume';
import Status from '../../../components/cours/coursCompenentSpeaker/Status/Status';
import Restriction from '../../../components/cours/coursCompenentSpeaker/Restriction/Restriction';
import Section from '../../../components/cours/coursCompenentSpeaker/Section/Section';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';

const NewQuiz = () => (
  <div className={styles.NewQuiz} data-testid="NewQuiz">
     <div className={styles.NewQuiz__header}>
      <div className={styles.header_Top}>
    <Resume
    title="Titre de mon cours"
    name="Nom intervenant"
    badges1= {<BadgeFilterSolid
      style={{ backgroundColor: "red" }}
      title="Hors-ligne"
     />}
     description="Description de mon cours qui sera affiché sur la page d'accueil du site et sur la page de mon cours pour les utilisateurs non connectés. Cette description doit être courte et claire. Elle doit donner envie aux utilisateurs de s'inscrire à votre cours."
     date="08/08/2020"
      badges2= {<BadgeFilterSolid
        style={{ backgroundColor: "blue" }}
        title="php"
       />}
    />
    </div>
    <div className={styles.header_Bottom}>
    <Status title="Status"/>
    <Restriction title="Réstriction"/>
    </div>

    </div>
    <div className={styles.NewQuiz__body}>
       <div className={styles.body_Top}>
        <div className={styles.ContainerMap}>
        <div className={styles.header} >
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <Section title="La partie mvc numéro 1"/>
        <div><AddPage title="Créer une nouvelle partie"/></div>
        </div>
        
        </div>
       
        
       </div>
     
    </div>
  </div>
);

NewQuiz.propTypes = {};

NewQuiz.defaultProps = {};

export default NewQuiz;
