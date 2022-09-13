import React, { useEffect } from 'react';
import styles from './UserEdit.module.scss';
import { getUser, patchUser } from "../../../../modules/apis/UserAPI";
import Load from '../../../../components/Load/Load';
import ButtonDefaultLogoRigth from '../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';
import InputText from '../../../../components/forms/inputs/InputText/InputText';
import FormContainer from '../../../../components/forms/containers/FormContainer/FormContainer';
import InputSelect from '../../../../components/forms/inputs/InputSelect/InputSelect';

const UserEdit = ({id, navigation}) => {

  const [users, setUsers] = React.useState({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [role, setRole] = React.useState(null);
  const[activated, setActivated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const listeRoles = [ 
    {name: "Intervenant", value : "ROLE_SPEAKER"},
    {name: "Superadmin", value : "ROLE_SUPERADMIN"},
    {name: "Etudiant", value : "ROLE_STUDENT"},
    {name: "Administration", value : "ROLE_ADMINISTRATION"}
  ];

  function onSubmit() {
    console.log({ name, email,activated, roles: [role] });
    patchUser(
      sessionStorage.getItem("token"),
      id,
      { name, email, roles : [role], activated },
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
        setRole(data.roles);
        setIsLoading(false);
        setUsers(data);
        setName(data.name);
        setEmail(data.email);
       
        setActivated(data.activated);
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
       
        
        <InputSelect
        onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          {listeRoles?.map((roleElement,index) => (
            <option key={index} value={roleElement.value} selected={role.includes(roleElement.value)}>
              {roleElement.name}
            </option>
          ))}
        </InputSelect>
        
        <InputSelect
        onChange={(e) => {
           setActivated(e.target.value === "true");
          }}
        >
          <option value="true" selected={users.activated}>Activé</option>
          <option value="false" selected={!users.activated}>Désactivé</option>
        </InputSelect>

        
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
