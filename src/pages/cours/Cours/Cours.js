import React from "react";
import CoursAdministration from "../CoursAdministration/CoursAdministration";
import CoursAdministrator from "../CoursAdministrator/CoursAdministrator";
import CoursSpeaker from "../CoursSpeaker/CoursSpeaker";
import CoursStudent from "../CoursStudent/CoursStudent";

const Cours = () => {
  /*
   * ROLE_ADMINISTRATION
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_SUPERADMIN");

  if (role === "ROLE_ADMINISTRATION") return <CoursAdministration />;
  else if (role === "ROLE_STUDENT") return <CoursStudent />;
  else if (role === "ROLE_SPEAKER") return <CoursSpeaker />;
  else if (role === "ROLE_SUPERADMIN") return <CoursAdministrator />;
};
Cours.propTypes = {};

Cours.defaultProps = {};

export default Cours;
