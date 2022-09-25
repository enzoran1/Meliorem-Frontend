import React from 'react';
import styles from './NewCours.module.scss';
import Status from '../../../components/cours/coursCompenentSpeaker/Status/Status';
import Restriction from '../../../components/cours/coursCompenentSpeaker/Restriction/Restriction';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';
import Resume from '../../../components/cours/coursCompenentSpeaker/Resume/Resume';
import BadgeFilterSolid from '../../../components/badges/BadgeFilterSolid/BadgeFilterSolid';
import Section from '../../../components/cours/coursCompenentSpeaker/Section/Section';
import { Link} from "react-router-dom";
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

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
       <div className="inline-block px-6 py-2.5  leading-tight  transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        <AddPage title="Créer une nouvelle partie"/>
        </div>

       </div>
     
    </div>
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto  bg-clip-padding  outline-none text-current">
      
      <div className={`modal-body relative p-4 ${styles.modalContainer}`}>
        <FormContainer>
          <InputText></InputText>
          <div
        className={styles.Modal_Button}>
        <button type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Save changes
        </button>
      </div>
        </FormContainer>
      </div>
      
    </div>
  </div>
</div>
  </div>
);

NewCours.propTypes = {};

NewCours.defaultProps = {};

export default NewCours;
