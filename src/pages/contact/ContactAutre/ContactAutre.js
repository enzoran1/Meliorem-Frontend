import React from "react";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import CardContact from "../../../components/CardContact/CardContact";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Load from "../../../components/Load/Load";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import { getAllContact, getAllWithPageContact } from "../../../modules/apis/ContactAPI";
import paginations from "../../../modules/Paginations";

import styles from "./ContactAutre.module.scss";

const ContactAutre = () => {
  const [contacts, setContacts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  function refreshContacts() {
    setIsLoading(true);
    getAllWithPageContact(
      sessionStorage.getItem("token"),
      8,
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
    refreshContacts();
    getAllContact(
      sessionStorage.getItem("token"),
      (contactsFetched) => {
        setContacts(contactsFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [page]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;


  return (
    <div className={styles.ContactAutre} data-testid="ContactAutre">
      <div className={styles.ContactAutre_Search}>
        <div className={styles.Search_Top}>
          <InputSearchComplex />
        </div>
        <div className={styles.Search_Bottom}>
          <BadgeFilterSolid
            style={{ backgroundColor: "orange", cursor: "pointer" }}
            title="Administrations"
          />
          <BadgeFilterSolid
            style={{ backgroundColor: "violet", cursor: "pointer" }}
            title="Intervenant"
          />
          <BadgeFilterSolid
            style={{ backgroundColor: "green", cursor: "pointer" }}
            title="Direction"
          />
        </div>
      </div>

      <div className={styles.Container_Grid}>
        {contacts.map((contact, index) => (
          <CardContact
            name={contact.userInfo.name + " " + contact.userInfo.firstname}
            role={contact.typeContactName}
            email={contact.userInfo.email}
            tel={contact.phone}
            telLogo={contact.phone}
            emailLogo={contact.userInfo.email}
            key={index}
          />
        ))}
      </div>

      <div className={styles.ContactAutre_Pagination}>
        {pagination}
      </div>
    </div>
  );
};
ContactAutre.propTypes = {};

ContactAutre.defaultProps = {};

export default ContactAutre;
