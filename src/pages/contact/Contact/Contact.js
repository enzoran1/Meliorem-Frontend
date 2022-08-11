import React from "react";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ContactAutre from "../ContactAutre/ContactAutre";

const Contact = () => {
  /*
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_AUTRE");

  if (role === "ROLE_ADMINISTRATION") return <ContactAdmin />;
  else if (role === "ROLE_AUTRE") return <ContactAutre />;
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
