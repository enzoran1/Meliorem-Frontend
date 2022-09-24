import React, { useEffect } from "react";
import Load from "../../../components/Load/Load";
import { getRoles } from "../../../modules/accountUtils";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ContactAutre from "../ContactAutre/ContactAutre";

const Contact = (props) => {
  const [role , setRole] = React.useState(["ROLE_SPEAKER"]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getRoles(sessionStorage.getItem("token"),props.navigation,(role) => {
      setRole(role);
      setLoading(false);
    });
  }, []);

  if (loading) 
    return <Load/>;

  if (role.includes("ROLE_SUPERADMIN")) return <ContactAdmin props={props}/>;
  else if (role.includes("ROLE_STUDENT") || role.includes("ROLE_SPEAKER"))
    return <ContactAutre props={props}/>;
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
