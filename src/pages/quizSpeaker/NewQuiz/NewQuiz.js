import React, { useEffect } from 'react';
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
  const [refresh, setRefresh] = React.useState(false);
  const quizContext = React.useContext(quizCreationsContext);
  const navigate = useNavigate();

  function deleteQuizParts(index){
    quizContext.quizInfo.quizParts.splice(index, 1);
    setRefresh(!refresh);
  }

  if (quizContext.quizInfo.quizParts === undefined)
      quizContext.quizInfo.quizParts = [];

      console.log(quizContext.quizInfo.quizParts);
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
            title={quizContext.quizInfo.theme ?? "non renseigné"}
          />}
        />  
      </div>
      <div className={styles.header_Bottom}>
        <Status title="Status" value={quizContext.quizInfo.public ?? false} onChange={(e)=>{quizContext.quizInfo.public = e.target.value}}/> 
      </div>
    </div>
    <div className={styles.NewQuiz__body}>
      <div className={styles.body_Top}>
        <div className={styles.ContainerMap}>
          <div className={styles.header} >
            {quizContext.quizInfo.quizParts.map((quizPart, index) => (
              <Section onClickCross={()=>deleteQuizParts(index)} key={index} title={quizPart.question} onClickPencil={()=>{navigate(`/NouvelleQuestion/${index}`)}}/>
            ))}
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
