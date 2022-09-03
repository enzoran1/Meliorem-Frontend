import React from "react";

import styles from "./ContactAdmin.module.scss";
import { getAllWithPageContact, removeContact } from "../../../modules/apis/ContactAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import Spinner from "../../../components/Spinner/Spinner";


const ContactAdmin = (props) => {
  const [contacts, setContacts] = React.useState([]);
  const [isLoading , setIsLoading] = React.useState(true);
  const [page,setPage] = React.useState(1);
  const [totalPage,setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  console.log(paginations(page,totalPage,2));

  function refreshContact() {
    setIsLoading(true);
    getAllWithPageContact(
      sessionStorage.getItem("token"),5,page,
      contactsFetched=>{setIsLoading(false);setContacts(contactsFetched.data); setTotalPage(contactsFetched.totalPage);},
      error=>console.error(error)
    );
  }

  function onChangePage(page) {
    setIsLoading(true);
    setPage(page);
  }

  React.useEffect(() => {
    refreshContact();
  }, [page]);
  
  let pagination = <Pagination data={paginations(page,totalPage,2)} onChangePage={onChangePage} actualPage={page}/>;

  if (isLoading) 
    return <><Spinner/>{pagination}</>

  return (
    <div className={styles.ContactAdmin} data-testid="ContactAdmin">
      <TableAdmin titles={["Prénom", "Nom", "Type"]}>
        {contacts.map((contact, index) => (
          <TableBody
            onClickView={() => navigate(`/contact/view/${contact.id}`)}
            onClickDelete={() => removeContact(
                sessionStorage.getItem("token"),
                contact.id,
                response =>refreshContact(),
                error => console.error(error)
              )
            }
            key={index}
            attributes={[
              contact.userInfo.firstname,
              contact.userInfo.name,
              contact.typeContactName,
            ]}
          />
        ))}
      </TableAdmin>
      {pagination}
    </div>
  );
};

ContactAdmin.propTypes = {};

ContactAdmin.defaultProps = {};

export default ContactAdmin;
