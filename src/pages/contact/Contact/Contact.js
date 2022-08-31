import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ContactAutre from "../ContactAutre/ContactAutre";
import { getMyUser } from "../../../modules/apis/UserAPI";

const Contact = () => {
  const [role, setRole] = React.useState(["ROLE_SUPERADMIN"]);
  const navigate = useNavigate();

  /*useEffect(() => {
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
