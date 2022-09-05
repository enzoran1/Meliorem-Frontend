import React from "react";
import styles from "./CrudEdit.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import ContactsEdit from "../../pages/adminPages/formsCrud/Contacts/ContactsEdit";
import CoursEdit from "../../pages/adminPages/formsCrud/CoursEdit/CoursEdit";
import QuizEdit from "../../pages/adminPages/formsCrud/QuizEdit/QuizEdit";

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

  return (
    <div className={styles.CrudEdit} data-testid="CrudEdit">
      {EditComponent}
    </div>
  );
};

CrudEdit.propTypes = {};

CrudEdit.defaultProps = {};

export default CrudEdit;
