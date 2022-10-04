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
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import ButtonFixedRigth from '../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth';
import { postQuiz } from '../../../modules/apis/QuizAPI';
import { getMyUser } from '../../../modules/apis/UserAPI';
import { postQuizPart } from '../../../modules/apis/QuizPartAPI';

const NewQuiz = (props) => {
  const [refresh, setRefresh] = React.useState(false);
  const quizContext = React.useContext(quizCreationsContext);
  const navigate = useNavigate();

  function whenSubmit() {
    if (quizContext.quizInfo.title === '' ||
      quizContext.quizInfo.description === '' ||
      quizContext.quizInfo.theme === '' ||
      quizContext.quizInfo.timeToPerformAll === 0 ||
      quizContext.quizInfo.quizParts === undefined || quizContext.quizInfo.quizParts.length === 0) { 
      alert("Veuillez remplir tous les champs");
      return;
    }
    getMyUser(sessionStorage.getItem('token'), (user) => {
      postQuiz(sessionStorage.getItem('token'), {
        title : quizContext.quizInfo.title,
        theme : quizContext.quizInfo.theme,
        public : quizContext.quizInfo.public,
        description : quizContext.quizInfo.description,
        timeToPerformAll : quizContext.quizInfo.timeToPerformAll,
        speakerId : user.speaker.id,
      }, (response) => {
        quizContext.quizInfo.quizParts.forEach((element,index) => {
          postQuizPart(sessionStorage.getItem('token'), {
            question : element.question,
            answer : JSON.stringify(element.responses),
            quizId : response.id,
            timeMaxToResponse : element.timeMaxToResponse,
            quizOrder : index,
            choice : element.choice,
            skillId : element.skill,
        });
        navigate('/liste-quiz-intervenant');
      }, (error) => {
        console.error("Une erreur est survenue lors de la création du quiz");
      });
    }, (error) => {
      console.error(error);
    });
  })}

  function deleteQuizParts(index){
    quizContext.quizInfo.quizParts.splice(index, 1);
    setRefresh(!refresh);
  }

  if (quizContext.quizInfo.quizParts === undefined)
      quizContext.quizInfo.quizParts = [];

      console.log(quizContext.quizInfo.quizParts);
return(
  <>
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
        <Restriction title="Réstriction"/> 
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

  <ButtonFixedRigth top bgBtn="#ffffff"
  style={{ backgroundColor: "#4F46E5" }}
  onClick={whenSubmit}
  />
</>
)};

NewQuiz.propTypes = {};

NewQuiz.defaultProps = {};

export default NewQuiz;
