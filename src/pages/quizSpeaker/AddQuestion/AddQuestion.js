import React from 'react';

import styles from './AddQuestion.module.scss';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputArea from '../../../components/forms/inputs/InputArea/InputArea';
import InputSelect from '../../../components/forms/inputs/InputSelect/InputSelect';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';

import ButtonCross from '../../../components/buttons/ButtonCross/ButtonCross';
import { quizCreationsContext } from '../../../contexts/quizCreations';
import Load from '../../../components/Load/Load';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import { useNavigate } from 'react-router-dom';
import { getAllSkill } from '../../../modules/apis/SkillAPI';

const AddQuestion = (props) => { // add or edit a question
  const [step, setStep] = React.useState(1);
  const [types, setTypes] = React.useState(0);
  const [id, setId] = React.useState(-1);
  const [executed] = React.useState([false]);
  const [skills, setSkills] = React.useState([]);


  const quizContext = React.useContext(quizCreationsContext);
  let navigate = useNavigate()

  const getData = () => {return quizContext.quizInfo.quizParts[id]}


  if (quizContext.quizInfo.quizParts === undefined)
    quizContext.quizInfo.quizParts = [];

  React.useEffect(() => {
    if (executed[0] == true)return;
    executed[0] = true;
    let localId = quizContext.quizInfo.quizParts.length;
    quizContext.quizInfo.quizParts[localId] = {
      id : localId,
      question: "",
      skill: "",
      answers: [],
    };
    setId(localId);
    
    getAllSkill(sessionStorage.getItem('token'),(data) => {
        setSkills(data);
      },(error) => {
        console.log(error);
      }
    );
  }, []);

  if (quizContext.quizInfo.quizParts[id] == undefined)
    return <Load></Load>;


    let form;
    if (step === 1)
      form = (
      <FormContainer>
        <div className={styles.containerForm}>
        <label>Question</label>
        <InputArea value={getData().question} onChange={e=>{getData().question = e.target.value}}/>
        <label>Themes</label>
        <InputText value={getData().theme} />
        <label>Type</label>
        <InputSelect onChange={(e)=> getData().skill = e.target.value}>
        {skills.map((skill) => (
          <option value={skill.id} selected={getData().skill == skill.id}>{skill.name}</option>
        ))}
        </InputSelect>
        <div className={styles.Form_Button}>
        <ButtonDefaultLogoRigth onClick={()=>{setStep(0)}} title="Suivant"/>
        <ButtonDefaultLogoRigth 
        onClick={()=>{
          quizContext.quizInfo.quizParts.splice(id, 1)
          navigate("/templateAddQuiz")
        }} 
        isLeft title="Annuler"/>
        </div>
        </div>
      </FormContainer>);
    else
      form = (
        <FormContainer>
          <div className={styles.containerForm}>
            <div className={styles.Container_Question}>
            <p>Ma question pour m'en souvenir ?</p>
            </div>
            <div className={styles.Container_Reponse}>
              <div className={styles.Form_Reponse}>
              <div className={styles.Sup}>
              <ButtonCross/>
              <label htmlFor="">Réponse 1</label>
              </div>
               { (types === 1) 
               ? 
                <div className="form-check">
                  <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                    La bonne reponse
                  </label>
                </div>
               : 
                <div className="form-check">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Une des bonne reponse
      </label>
                </div>
               }
              </div>
              <InputArea/>
            </div>

            <div className={styles.Container_Reponse}>
              <div className={styles.Form_Reponse}>
              <div className={styles.Sup}>
              <ButtonCross/>
              <label htmlFor="">Réponse 2</label>
              </div>
               { (types === 1) 
               ? 
                <div className="form-check">
                  <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                    La bonne reponse
                  </label>
                </div>
               : 
                <div className="form-check">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Une des bonne reponse
      </label>
                </div>
               }
              </div>
              <InputArea/>
            </div>

            <div className={styles.Container_NewReponse}>
            <AddPage style={{ width: "100%", }} title="Nouvelle réponse"/>
            </div>
            
          <div className={styles.Form_Button}>
          <ButtonDefaultLogoRigth style={{width: "100%"}} title="Valider"/>
          
          <ButtonDefaultLogoRigth style={{width: "100%"}} onClick={()=>{setStep(1)}} title="Retour" isLeft/>
          
          
          
          </div>
          </div>
        </FormContainer>
      )
    
  




return(
  <div className={styles.AddQuestion} data-testid="AddQuestion">
   {form}
  </div>
);
}
AddQuestion.propTypes = {};

AddQuestion.defaultProps = {};

export default AddQuestion;
