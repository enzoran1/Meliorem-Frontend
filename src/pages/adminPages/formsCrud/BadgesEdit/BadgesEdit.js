import React, { useEffect } from 'react';

import { getBadge, patchBadge } from "../../../../modules/apis/BadgeAPI";
import styles from './BadgesEdit.module.scss';
import Load from '../../../../components/Load/Load';
import FormContainer from '../../../../components/forms/containers/FormContainer/FormContainer';
import InputText from '../../../../components/forms/inputs/InputText/InputText';
import ButtonDefaultLogoRigth from '../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const BadgesEdit = ({id,navigation}) => 
{
  const [badges, setBadges] = React.useState({});
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ name, description });
    patchBadge(
      sessionStorage.getItem("token"),
      id,
      { name, description },
      (response) => {
        console.log("Badges updated");

        navigation("/badges-admin");
      }
    );
  }

  useEffect(() => {
    getBadge(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setBadges(data);
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
  <div className={styles.BadgesEdit} data-testid="BadgesEdit">
    <FormContainer titleForm="Edition Badge">
      <div className={styles.Badges__Form}>
        <InputText
          placeholder="Nom"
          type="text"
          value={badges.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <InputText
          placeholder="Description"
          type="text"
          value={badges.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
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

BadgesEdit.propTypes = {};

BadgesEdit.defaultProps = {};

export default BadgesEdit;
