import React from "react";
import styles from "./CrudEdit.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import ContactsEdit from "../../pages/adminPages/formsCrud/Contacts/ContactsEdit";
import CoursEdit from "../../pages/adminPages/formsCrud/CoursEdit/CoursEdit";
import QuizEdit from "../../pages/adminPages/formsCrud/QuizEdit/QuizEdit";
import UserEdit from "../../pages/adminPages/formsCrud/UserEdit/UserEdit";
import GroupsEdit from "../../pages/adminPages/formsCrud/GroupsEdit/GroupsEdit";
import BadgesEdit from "../../pages/adminPages/formsCrud/BadgesEdit/BadgesEdit";

const CrudEdit = () => {
  const navigation = useNavigate();
  let { entity, id } = useParams();
  let EditComponent;

  if (entity === "contact")
    EditComponent = (
      <ContactsEdit id={id} navigation={navigation}></ContactsEdit>
    );
  else if (entity === "cours")
    EditComponent = <CoursEdit id={id} navigation={navigation}></CoursEdit>;
  else if (entity === "quiz")
    EditComponent = <QuizEdit id={id} navigation={navigation}></QuizEdit>;
  else if (entity === "users") 
    EditComponent = <UserEdit id={id} navigation={navigation}></UserEdit>;
  else if (entity === "groups") 
    EditComponent = <GroupsEdit id={id} navigation={navigation}></GroupsEdit>; 
  else if (entity === "badges") 
    EditComponent = <BadgesEdit id={id} navigation={navigation}></BadgesEdit>;     
    

  return (
    <div className={styles.CrudEdit} data-testid="CrudEdit">
      {EditComponent}
    </div>
  );
};

CrudEdit.propTypes = {};

CrudEdit.defaultProps = {};

export default CrudEdit;
