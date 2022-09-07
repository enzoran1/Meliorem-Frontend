import React, { useEffect } from 'react';
import styles from './GroupsEdit.module.scss';
import Load from '../../../../components/Load/Load';
import { getGroup, patchGroup } from "../../../../modules/apis/GroupAPI";
import ButtonDefaultLogoRigth from '../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import InputText from '../../../../components/forms/inputs/InputText/InputText';
import FormContainer from '../../../../components/forms/containers/FormContainer/FormContainer';

const GroupsEdit = ({id,navigation}) => 
{
  const [groups, setGroups] = React.useState({});
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ name, description });
    patchGroup(
      sessionStorage.getItem("token"),
      id,
      { name, description },
      (response) => {
        console.log("Groups updated");

        navigation("/groups");
      }
    );
  }

  useEffect(() => {
    getGroup(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setGroups(data);
        setName(data.name);
        setDescription(data.description);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [id]);

  if (isLoading) return <Load />;


return(
  <div className={styles.GroupsEdit} data-testid="GroupsEdit">
    <FormContainer titleForm="Edition Group">
      <div className={styles.Groups__Form}>
        <InputText
          placeholder="Nom"
          type="text"
          value={groups.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputText
          placeholder="Description"
          type="text"
          value={groups.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

<ButtonDefaultLogoRigth
          title="Valider"
          onClick={() => {
            onSubmit();
          }}
        />
        </div>
      </FormContainer>
        
  </div>
);
}

GroupsEdit.propTypes = {};

GroupsEdit.defaultProps = {};

export default GroupsEdit;
