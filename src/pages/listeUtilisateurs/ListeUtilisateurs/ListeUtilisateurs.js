import React from "react";

import ListeUtilisateursAutres from "../ListeUtilisateursAutres/ListeUtilisateursAutres";
import ListeUtilisateursAdmin from "../ListeUtilisateursAdmin/ListeUtilisateursAdmin";

const ListeUtilisateurs = () => {
  /*
   * ROLE_ADMINISTRATION
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_SPEAKER");

  if (role === "ROLE_STUDENT" || role === "ROLE_SPEAKER")
    return <ListeUtilisateursAutres />;
  else if (role === "ROLE_SUPERADMIN") return <ListeUtilisateursAdmin />;
};

ListeUtilisateurs.propTypes = {};

ListeUtilisateurs.defaultProps = {};

export default ListeUtilisateurs;
