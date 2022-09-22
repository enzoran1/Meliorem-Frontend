import React from "react";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ContactAutre from "../ContactAutre/ContactAutre";

const Contact = () => {
  const [role /*, setRole*/] = React.useState(["ROLE_SPEAKER"]);
  /* useEffect(() => {
    getMyUser(
      sessionStorage.getItem("token"),
      (user) => {
        console.log(user.roles);
        if (
          !user.roles ||
          (!user.roles.includes("ROLE_SUPERADMIN") &&
            !user.roles.includes("ROLE_STUDENT") &&
            !user.roles.includes("ROLE_SPEAKER"))
        )
          navigate("/");
        setRole(user.roles);
      },
      (error) => {}
    );
  }, [navigate]);*/

  if (role.includes("ROLE_SUPERADMIN")) return <ContactAdmin />;
  else if (role.includes("ROLE_STUDENT") || role.includes("ROLE_SPEAKER"))
    return <ContactAutre />;
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
