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
import { useNavigate, useParams} from 'react-router-dom';
import { getAllSkill } from '../../../modules/apis/SkillAPI';
import AlertWarning from '../../../components/alerts/AlertWarning/AlertWarning';



const AddQuestion = (props) => { // add or edit a question
  const [step, setStep] = React.useState(1);
  const [id, setId] = React.useState(-1);
  const [executed] = React.useState([false]);
  const [skills, setSkills] = React.useState([]);
  const [error, setError] = React.useState("");
  const [refresh, setRefresh] = React.useState(false);



  const quizContext = React.useContext(quizCreationsContext);
  let navigate = useNavigate();
  let { idQuestion } = useParams();


  const getData = () => {return quizContext.quizInfo.quizParts[id]}


  if (quizContext.quizInfo.quizParts === undefined)
    quizContext.quizInfo.quizParts = [];

  function valider() {
    if (getData().question === undefined || getData().question === "") {
      setError("Veuillez renseigner une question");
      return;
    }
    if (getData().skill === undefined || getData().skill === "") {
      setError("Veuillez renseigner une compétence");
      return;
    }
    getData().responses.forEach(element => {
      if (element === undefined || element.text === "") {
        setError("Vous n'avez pas renseigné toutes les réponses");
        return;
      }
    });
    if (getData().responses.length < 2) {
      setError("Vous devez renseigner au moins 2 réponses");
      return;
    }
    setError("");
    navigate("/templateAddQuiz");

  }
  React.useEffect(() => {

    if (executed[0] == true)return;

    getAllSkill(sessionStorage.getItem('token'),(data) => {
        setSkills(data);
      },(error) => {
        console.log(error);
      }
    );
    
      if (idQuestion) {
        setId(idQuestion);
        return;
    }
    executed[0] = true;
    let localId = quizContext.quizInfo.quizParts.length;
    quizContext.quizInfo.quizParts[localId] = {
      id : localId,
      question: "",
      skill: "",
      responses: [],
    };
    setId(localId);
  }, []);

  if (quizContext.quizInfo.quizParts[id] == undefined)
    return <Load></Load>;

  let count = 1;


    let form;
    if (step === 1)
      form = (
      <FormContainer>
        <div className={styles.containerForm}>
        <label>Question</label>
        <InputArea value={getData().question} onChange={e=>{getData().question = e.target.value}}/>
        <label>Compétence</label>
        <InputSelect onChange={(e)=> getData().skill = e.target.value}>
        {skills.map((skill) => (
          <option value={skill.id} selected={getData().skill == skill.id}>{skill.name}</option>
        ))}
        </InputSelect>
        <label>Types</label>
        <InputSelect onChange={(e)=> getData().type = e.target.value}>
          <option value="radio" selected={getData().type === "radio"}>Choix unique (une bonne reponse)</option>
          <option value="checkbox" selected={getData().type === "checkbox"}>Choix multiple (une ou plus de bonne reponse)</option>
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
            <p>{getData().question}</p>
            </div>
            <div className={styles.Container_Reponse}>
            {getData().responses.map((response,index) => (
            <div key={index}>
              <div className={styles.Form_Reponse}>
                <div className={styles.Sup}>
                  <ButtonCross onClick={()=>{
                    console.log(index, getData().responses[index])
                    getData().responses.splice(index, 1)
                    console.log(getData().responses)
                    setRefresh(!refresh);
                    }}/>
                  <label htmlFor="">Réponse {count++}</label>
                </div>
                {(getData().type === "radio") 
                ? 
                  <div className="form-check">
                    <input checked={response.valid} onChange={(e)=>{response.valid = e.target.checked;setRefresh(!refresh);}} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                      Valide
                    </label>
                  </div>
                : 
                  <div className="form-check">
                  <input checked={response.valid} onChange={(e)=>{response.valid = e.target.checked;setRefresh(!refresh);}} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    Valide
                  </label>
                  </div>
                }
                </div>
              <InputArea valueModel={response.text} onChange={(e)=>{response.text = e.target.value;setRefresh(!refresh);}}/>
            </div>
            ))}
          </div>
          <div className={styles.Container_NewReponse}>
            <AddPage style={{ width: "100%", }} title="Nouvelle réponse" onClick={()=>{
              getData().responses.push({text:"",valid:false});
              setRefresh(!refresh);
              }}/>
          </div>
          {error==""?<></>:<AlertWarning title={error}/>}
          
          <div className={styles.Form_Button}>
          <ButtonDefaultLogoRigth style={{width: "100%"}} title="Valider" onClick={valider}/>
          
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
