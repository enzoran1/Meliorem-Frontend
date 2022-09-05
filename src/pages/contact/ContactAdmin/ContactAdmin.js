import React from "react";

import styles from "./ContactAdmin.module.scss";
import {
  getAllWithPageContact,
  removeContact,
} from "../../../modules/apis/ContactAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import Load from "../../../components/Load/Load";

const ContactAdmin = (props) => {
  const [contacts, setContacts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshContact() {
    setIsLoading(true);
    getAllWithPageContact(
      sessionStorage.getItem("token"),
      5,
      page,
      (contactsFetched) => {
        setIsLoading(false);
        setContacts(contactsFetched.data);
        setTotalPage(contactsFetched.totalPage);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  function onChangePage(page) {
    setPage(page);
  }

  React.useEffect(() => {
    refreshContact();
    // eslint-disable-next-line
  }, [page]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 2)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;

  return (
    <div className={styles.ContactAdmin} data-testid="ContactAdmin">
      <TableAdmin
        titles={["Prénom", "Nom", "téléphone", "Description", "Type"]}
      >
        {contacts.map((contact, index) => (
          <TableBody
            onClickView={() => navigate(`/contact/view/${contact.id}`)}
            onClickEdit={() => navigate(`/contact/edit/${contact.id}`)}
            onClickDelete={() =>
              removeContact(
                sessionStorage.getItem("token"),
                contact.id,
                (response) => refreshContact(this),
                (error) => console.error(error)
              )
            }
            key={index}
            attributes={[
              contact.userInfo.firstname,
              contact.userInfo.name,
              contact.phone,
              contact.description,
              contact.typeContactName,
            ]}
          />
        ))}
      </TableAdmin>
      <div className={styles.Pagination_Container}>{pagination}</div>
    </div>
  );
};

ContactAdmin.propTypes = {};

ContactAdmin.defaultProps = {};

export default ContactAdmin;
