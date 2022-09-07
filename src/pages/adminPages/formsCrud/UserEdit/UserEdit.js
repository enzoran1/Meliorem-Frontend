import React, { useEffect } from 'react';
import styles from './UserEdit.module.scss';
import { getUser, patchUser } from "../../../../modules/apis/UserAPI";
import Load from '../../../../components/Load/Load';
import ButtonDefaultLogoRigth from '../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import InputText from '../../../../components/forms/inputs/InputText/InputText';
import FormContainer from '../../../../components/forms/containers/FormContainer/FormContainer';

const UserEdit = ({id, navigation}) => {

  const [users, setUsers] = React.useState({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ name, email, password, role });
    patchUser(
      sessionStorage.getItem("token"),
      id,
      { name, email, password, role },
      (response) => {
        console.log("Users updated");

        navigation("/users");
      }
    );
  }

  useEffect(() => {
    getUser(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setUsers(data);
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
        setRole(data.role);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [id]);

  if (isLoading) return <Load />;

return(
  <div className={styles.UserEdit} data-testid="UserEdit">
    <FormContainer titleForm="Edition User">
      <div className={styles.User__Form}>
        <InputText
          placeholder="Nom"
          type="text"
          value={users.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputText
          placeholder="Email"
          type="text"
          value={users.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputText
          placeholder="Mot de passe"
          type="text"
          value={users.password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputText
          placeholder="Role"
          type="text"
          value={users.role}
          onChange={(e) => {
            setRole(e.target.value);
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
UserEdit.propTypes = {};

UserEdit.defaultProps = {};

export default UserEdit;
