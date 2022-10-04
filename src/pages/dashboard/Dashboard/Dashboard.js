import React, { useEffect } from "react";

import DashboardAdmin from "../DashboardAdministrator/DashboardAdministrator";
import DashboardStudent from "../DashboardStudent/DashboardStudent";
import DashboardSpeaker from "../DashboardSpeaker/DashboardSpeaker";
import DashboardAdministration from "../DashboardAdministration/DashboardAdministration";
import { getRoles } from "../../../modules/accountUtils";
import Load from "../../../components/Load/Load";

const Dashboard = (props) => {
  
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

  if (role.includes("ROLE_ADMINISTRATION")) return <DashboardAdministration />;
  else if (role.includes("ROLE_STUDENT")) return <DashboardStudent />;
  else if (role.includes("ROLE_SPEAKER")) return <DashboardSpeaker />;
  else if (role.includes("ROLE_SUPERADMIN")) return <DashboardAdmin />;
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
