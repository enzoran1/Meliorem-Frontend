import React, { useEffect } from "react";

import QuizStudent from "../QuizStudent/QuizStudent";
import QuizSpeaker from "../QuizSpeaker/QuizSpeaker";
import QuizAdministrator from "../QuizAdministrator/QuizAdministrator";
import { getRoles } from "../../../modules/accountUtils";
import Load from "../../../components/Load/Load";

const Quiz = (props) => {
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


  if (role.includes("ROLE_SUPERADMIN")) return <QuizAdministrator />;
  else if (role.includes("ROLE_STUDENT")) return <QuizStudent />;
  else if (role.includes("ROLE_SPEAKER")) return <QuizSpeaker />;
};

Quiz.propTypes = {};

Quiz.defaultProps = {};

export default Quiz;
