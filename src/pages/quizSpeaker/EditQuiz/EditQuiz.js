import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditQuiz.module.scss';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import InputArea from '../../../components/forms/inputs/InputArea/InputArea';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import { quizCreationsContext } from '../../../contexts/quizCreations';

const EditQuiz = () => {
  const quizContext = React.useContext(quizCreationsContext);

  return (
  <div className={styles.EditQuiz} data-testid="EditQuiz">
    <FormContainer>
      <label>Titre</label>
      <InputText value={quizContext.quizInfo.title} onChange={(event)=>{quizContext.quizInfo.title = event.target.value }}/>
      <label>Description</label>
      <InputArea value={quizContext.quizInfo.description} onChange={(event)=>{quizContext.quizInfo.description = event.target.value }}/>
      <label>Theme</label>
      <InputText value={quizContext.quizInfo.theme} onChange={(event)=>{quizContext.quizInfo.theme = event.target.value }}/>
      <ButtonDefaultLogoRigth title="Valider" style={{ width: "100%", }}/>
    </FormContainer>
  </div>
)};

EditQuiz.propTypes = {};

EditQuiz.defaultProps = {};

export default EditQuiz;
