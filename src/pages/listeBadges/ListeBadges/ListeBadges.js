import React from "react";
import ListeBadgesAdmin from "../ListeBadgesAdmin/ListeBadgesAdmin";
import ListeBadgesAutres from "../ListeBadgesAutres/ListeBadgesAutres";

const ListeBadges = () => {
  /*
   * ROLE_ADMINISTRATION
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_SPEAKER");

  if (role === "ROLE_STUDENT" || role === "ROLE_SPEAKER")
    return <ListeBadgesAutres />;
  else if (role === "ROLE_SUPERADMIN") return <ListeBadgesAdmin />;
};

ListeBadges.propTypes = {};

ListeBadges.defaultProps = {};

export default ListeBadges;
