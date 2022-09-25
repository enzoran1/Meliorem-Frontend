import React from 'react';
import styles from './NewQuiz.module.scss';
import BadgeFilterSolid from '../../../components/badges/BadgeFilterSolid/BadgeFilterSolid';
import Resume from '../../../components/cours/coursCompenentSpeaker/Resume/Resume';
import Status from '../../../components/cours/coursCompenentSpeaker/Status/Status';
import Restriction from '../../../components/cours/coursCompenentSpeaker/Restriction/Restriction';
import Section from '../../../components/cours/coursCompenentSpeaker/Section/Section';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import { Link, useNavigate } from 'react-router-dom';
import ButtonPencils from '../../../components/buttons/ButtonPencils/ButtonPencils';
import { quizCreationsContext } from '../../../contexts/quizCreations';

const NewQuiz = (props) => {
  const quizContext = React.useContext(quizCreationsContext);
const navigate = useNavigate();

return(
  <div className={styles.NewQuiz} data-testid="NewQuiz">
     <div className={styles.NewQuiz__header}>
      <div className={styles.header_Top}>
    <Resume
    onClickPencil={() => navigate('/EditQuiz')}
    title={quizContext.quizInfo.title ?? "non renseigné"}
     description={quizContext.quizInfo.description ?? "non renseigné"}
     date={new Date().toLocaleDateString("fr-FR")}
      badges2= {<BadgeFilterSolid
        style={{ backgroundColor: "#495eca" }}
        title="php"
       />}
    />
      </div>
      <div className={styles.header_Bottom}>
      <Status title="Status" />
      <Link to="/RestrictionQuiz">
      <Restriction title="Réstriction"/>
      </Link>
      </div>

      </div>
      <div className={styles.NewQuiz__body}>
        <div className={styles.body_Top}>
          <div className={styles.ContainerMap}>
          <div className={styles.header} >
          <Section title="La partie mvc numéro 1"/>
          <Link to="/NouvelleQuestion">
            <AddPage title="Créer une nouvelle partie"/>
          </Link>
          </div>
          
          </div>
        
          
        </div>
      
      </div>
    
    </div>
)};

NewQuiz.propTypes = {};

NewQuiz.defaultProps = {};

export default NewQuiz;
