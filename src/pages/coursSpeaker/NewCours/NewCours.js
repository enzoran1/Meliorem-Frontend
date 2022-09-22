import React from 'react';
import styles from './NewCours.module.scss';
import Status from '../../../components/cours/coursCompenentSpeaker/Status/Status';
import Restriction from '../../../components/cours/coursCompenentSpeaker/Restriction/Restriction';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';
import Resume from '../../../components/cours/coursCompenentSpeaker/Resume/Resume';
import BadgeFilterSolid from '../../../components/badges/BadgeFilterSolid/BadgeFilterSolid';
import Section from '../../../components/cours/coursCompenentSpeaker/Section/Section';
import { Link} from "react-router-dom";

const NewCours = () => (
  <div className={styles.NewCours} data-testid="NewCours">

    <div className={styles.NewCours__header}>
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
    <div className={styles.NewCours__body}>
       <div className={styles.body_Top}>
        <div className={styles.ContainerMap}>
        <div className={styles.header} >
        <Section title="La partie mvc numéro 1"/>
        <Section style={{ backgroundColor: "#556BDA" }} title="La partie mvc numéro 1"/>
        <Section style={{ backgroundColor: "orange" }} title="La partie mvc numéro 1"/>
        </div>
        <div className={styles.footer}>
        <Link to="/templateCkeditor">
        <Restriction title="Page"/>
        </Link>
        <Restriction title="Quiz"/>
        </div>
        </div>
       
        <AddPage title="Créer une nouvelle partie"/>
       </div>
     
    </div>
  </div>
);

NewCours.propTypes = {};

NewCours.defaultProps = {};

export default NewCours;
