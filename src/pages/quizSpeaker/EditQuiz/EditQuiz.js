import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditQuiz.module.scss';
import FormContainer from '../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../components/forms/inputs/InputText/InputText';
import InputArea from '../../../components/forms/inputs/InputArea/InputArea';
import ButtonDefaultLogoRigth from '../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const EditQuiz = () => (
  <div className={styles.EditQuiz} data-testid="EditQuiz">
    <FormContainer>
      <label>Titre</label>
      <InputText/>
      <label>Description</label>
      <InputArea/>
      <label>Theme</label>
      <InputText/>
      <ButtonDefaultLogoRigth title="Valider" style={{ width: "100%", }}/>
    </FormContainer>
  </div>
);

EditQuiz.propTypes = {};

EditQuiz.defaultProps = {};

export default EditQuiz;
