import React from 'react';

import styles from './AddQuestion.module.scss';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputArea from '../../../components/forms/inputs/InputArea/InputArea';
import InputSelect from '../../../components/forms/inputs/InputSelect/InputSelect';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import AddPage from '../../../components/cours/coursCompenentSpeaker/AddPage/AddPage';

import ButtonCross from '../../../components/buttons/ButtonCross/ButtonCross';


const AddQuestion = () => {

  const [step, setStep] = React.useState(0);
  const [types, setTypes] = React.useState(0);

    let form;
    if (step === 1)
      form = (
      <FormContainer>
        <div className={styles.containerForm}>
        <label>Question</label>
        <InputArea/>
        <label>Thémes</label>
        <InputSelect>
        </InputSelect>
        <label>Type</label>
        <InputSelect>
        </InputSelect>
        <div className={styles.Form_Button}>
        <ButtonDefaultLogoRigth title="Suivant"/>
        </div>
        </div>
      </FormContainer>
      );
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
                <div class="form-check">
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                    La bonne reponse
                  </label>
                </div>
               : 
                <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
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
                <div class="form-check">
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                    La bonne reponse
                  </label>
                </div>
               : 
                <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
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
          
          <ButtonDefaultLogoRigth style={{width: "100%"}} title="Retour" isLeft/>
          
          
          
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
