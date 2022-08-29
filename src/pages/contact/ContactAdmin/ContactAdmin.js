import React from "react";

import styles from "./ContactAdmin.module.scss";
import { getAllContact, removeContact } from "../../../modules/apis/ContactAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";

const ContactAdmin = (props) => {
  const [contacts, setContacts] = React.useState([]);
  const navigate = useNavigate();

  function refreshContact() {
    getAllContact(
      sessionStorage.getItem("token"),
      (contactsFetched) => {
        setContacts(contactsFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  React.useEffect(() => {
    refreshContact();
  }, []);

  return (
    <div className={styles.ContactAdmin} data-testid="ContactAdmin">
      <TableAdmin titles={["Prénom", "Nom", "Type"]}>
        {contacts.map((contact, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/contact/view/${contact.id}`);
            }}
            onClickDelete={() => {
              removeContact(
                sessionStorage.getItem("token"),
                contact.id,
                (response) => {
                  refreshContact();
                  console.log(response);
                },
                (error) => {
                  console.error(error);
                }
              );
            }}
            key={index}
            attributes={[
              contact.userInfo.firstname,
              contact.userInfo.name,
              contact.typeContactName,
            ]}
          />
        ))}
      </TableAdmin>
    </div>
  );
};

ContactAdmin.propTypes = {};

ContactAdmin.defaultProps = {};

export default ContactAdmin;
