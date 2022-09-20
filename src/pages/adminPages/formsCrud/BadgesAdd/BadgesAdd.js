import React from 'react';
import styles from './BadgesAdd.module.scss';
import {  postBadge } from "../../../../modules/apis/BadgeAPI";

import InputArea from '../../../../components/forms/inputs/InputArea/InputArea';
import ButtonDefaultLogoRigth from '../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import InputText from '../../../../components/forms/inputs/InputText/InputText';
import FormContainer from '../../../../components/forms/containers/FormContainer/FormContainer';


const BadgesAdd = ({navigation}) => {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function onSubmit() {
    console.log({ name, description, image:"" });
    postBadge(
      sessionStorage.getItem("token"),

      { name, description, image:"" },
      (response) => {
        console.log("Badge created");

        navigation("/badges-admin");
      },
      (error) => {
        console.log("problem creating badge");
        console.error(error);
      }
    );
  }


  return(
    <div className={styles.BadgesAdd} data-testid="BadgesAdd">
      <FormContainer titleForm="Add Badge">
        <div className={styles.Badges__Form}>
          <InputText
            placeholder="Nom"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <InputArea
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <ButtonDefaultLogoRigth
            title="Add"
            onClick={() => {
              onSubmit();
            }}
          />
        </div>
      </FormContainer>
    </div>

  );
}




BadgesAdd.propTypes = {};

BadgesAdd.defaultProps = {};

export default BadgesAdd;
