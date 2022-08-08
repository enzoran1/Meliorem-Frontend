import React from "react";

import DashboardAdmin from "../DashboardAdministrator/DashboardAdministrator";
import DashboardStudent from "../DashboardStudent/DashboardStudent";
import DashboardSpeaker from "../DashboardSpeaker/DashboardSpeaker";
import DashboardAdministration from "../DashboardAdministration/DashboardAdministration";

const Dashboard = () => {
  /*
   * ROLE_ADMINISTRATION
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_ADMINISTRATION");

  if (role === "ROLE_ADMINISTRATION") return <DashboardAdministration />;
  else if (role === "ROLE_STUDENT") return <DashboardStudent />;
  else if (role === "ROLE_SPEAKER") return <DashboardSpeaker />;
  else if (role === "ROLE_SUPERADMIN") return <DashboardAdmin />;
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
