import React from "react";
import { useEffect } from "react";
import Load from "../../../components/Load/Load";
import { getRoles } from "../../../modules/accountUtils";
import CoursAdministration from "../CoursAdministration/CoursAdministration";
import CoursAdministrator from "../CoursAdministrator/CoursAdministrator";
import CoursSpeaker from "../CoursSpeaker/CoursSpeaker";
import CoursStudent from "../CoursStudent/CoursStudent";

const Cours = (props) => {
  
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

  if (role.includes("ROLE_ADMINISTRATION")) return <CoursAdministration props={props}/>;
  else if (role.includes("ROLE_STUDENT")) return <CoursStudent props={props}/>;
  else if (role.includes("ROLE_SPEAKER")) return <CoursSpeaker props={props}/>;
  else if (role.includes("ROLE_SUPERADMIN")) return <CoursAdministrator props={props}/>;
};
Cours.propTypes = {};

Cours.defaultProps = {};

export default Cours;
