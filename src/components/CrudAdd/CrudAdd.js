import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import BadgesAdd from '../../pages/adminPages/formsCrud/BadgesAdd/BadgesAdd';
import ContactAdd from '../../pages/adminPages/formsCrud/ContactAdd/ContactAdd';
import styles from './CrudAdd.module.scss';



const CrudAdd = () => {
  const navigation = useNavigate();
  let { entity } = useParams();
  let AddComponent;

 if (entity === "badges")
    AddComponent = <BadgesAdd navigation={navigation}></BadgesAdd>;
else if (entity === "contacts")
    AddComponent = <ContactAdd navigation={navigation}></ContactAdd>

return(
  <div className={styles.CrudAdd}  data-testid="CrudAdd">
    {AddComponent}
  </div>
);
}
CrudAdd.propTypes = {};

CrudAdd.defaultProps = {};

export default CrudAdd;
