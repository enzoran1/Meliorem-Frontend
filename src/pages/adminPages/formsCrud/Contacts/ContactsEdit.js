import React, { useEffect } from "react";
import styles from "./ContactsEdit.module.scss";
import FormContainer from "../../../../components/forms/containers/FormContainer/FormContainer";
import InputText from "../../../../components/forms/inputs/InputText/InputText";
import ButtonDefaultLogoRigth from "../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth";
import { getContact, patchContact } from "../../../../modules/apis/ContactAPI";
import {getAllTypeContact,} from "../../../../modules/apis/TypeContactAPI";
import Load from "../../../../components/Load/Load";
import InputArea from "../../../../components/forms/inputs/InputArea/InputArea";
import InputSelect from "../../../../components/forms/inputs/InputSelect/InputSelect";

const ContactsEdit = ({ id, navigation }) => {
  const [contact, setContact] = React.useState({});
  const [description, setDescription] = React.useState("");
  const [typeContactId, setTypeContactId] = React.useState("");
  const [typeContactName, setTypeContactName] = React.useState("");
  const [typeContacts, setTypeContacts] = React.useState([]);
  const [phone, setPhone] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ description, phone, typeContactId });
    patchContact(
      sessionStorage.getItem("token"),
      id,
      { description, phone, typeContactId },
      (response) => {
        console.log("Contact updated");

        navigation("/contacts");
      }
    );
  }

  useEffect(() => {
    getContact(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setContact(data);
        setDescription(data.description);
        setPhone(data.phone);
        setTypeContactName(data.typeContactName);

            


        
      },
      (error) => {
        console.log(error);
      }
    );
    getAllTypeContact(
      sessionStorage.getItem("token"),
        (data) => {
          console.log(data);
          setTypeContacts(data);
        },
      (error) => {
        console.log(error);
      }
    );
    
  }, [id]);

  if (isLoading) return <Load />;

  if (!isLoading && typeContacts.length > 0 && typeContactId === "" && typeContactName)
    setTypeContactId(typeContacts.find((item) => item.name === typeContactName).id);

  return (
    <div className={styles.ContactsEdit} data-testid="Contacts">
      <FormContainer titleForm="Edition contact">
        <div className={styles.Contacts__Form}>
          <InputText
            placeholder="Votre téléphone"
            type="tel"
            value={contact.phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />{" "}
          <InputArea
            placeholder="Votre description"
            type="text"
            value={contact.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <InputSelect

          onChange={(e) => {
            setTypeContactId(e.target.value);
          }}

          >
            {typeContacts?.map((typeContactElements, index) => (
              <option key={index} value={typeContactElements.id} selected={typeContactElements.name === typeContactName}>
                  
                {typeContactElements.name}
                </option>
            ))}


          </InputSelect>
        </div>
        <div className={styles.Contacts__Form__Button}>
          <ButtonDefaultLogoRigth title="Envoyer" onClick={onSubmit} />
        </div>
      </FormContainer>
    </div>
  );
};

ContactsEdit.propTypes = {};

ContactsEdit.defaultProps = {};

export default ContactsEdit;
