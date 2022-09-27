import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditQuiz.module.scss';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import InputArea from '../../../components/forms/inputs/InputArea/InputArea';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import { quizCreationsContext } from '../../../contexts/quizCreations';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EditQuiz = () => {
  const quizContext = React.useContext(quizCreationsContext);
  const navigate = useNavigate();

  const [initialState, setInitialState] = React.useState({});

  useEffect(() => {
    setInitialState({
      title: quizContext.quizInfo.title,
      description: quizContext.quizInfo.description,
      theme: quizContext.quizInfo.theme,
    });
  }, []);

  return (
  <div className={styles.EditQuiz} data-testid="EditQuiz">
    <FormContainer>
      <label>Titre</label>
      <InputText value={quizContext.quizInfo.title} onChange={(event)=>{quizContext.quizInfo.title = event.target.value }}/>
      <label>Description</label>
      <InputArea value={quizContext.quizInfo.description} onChange={(event)=>{quizContext.quizInfo.description = event.target.value }}/>
      <label>Theme</label>
      <InputText value={quizContext.quizInfo.theme} onChange={(event)=>{quizContext.quizInfo.theme = event.target.value }}/>
      <ButtonDefaultLogoRigth title="Valider" style={{ width: "100%" }} onClick={()=>{navigate("/templateAddQuiz")}}/>
      <ButtonDefaultLogoRigth title="Annuler" style={{ width: "100%" }} onClick={()=>{
        quizContext.quizInfo.title = initialState.title;
        quizContext.quizInfo.description = initialState.description;
        quizContext.quizInfo.theme = initialState.theme;
        navigate("/templateAddQuiz");
        }}/>
    </FormContainer>
  </div>
)};

EditQuiz.propTypes = {};

EditQuiz.defaultProps = {};

export default EditQuiz;
