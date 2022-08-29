import React from "react";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ContactAutre from "../ContactAutre/ContactAutre";

const Contact = () => {
  /*
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_SPEAKER");

  if (role === "ROLE_ADMINISTRATION") return <ContactAdmin />;
  else if (role === "ROLE_STUDENT" || role === "ROLE_SPEAKER")
    return <ContactAutre />;
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
