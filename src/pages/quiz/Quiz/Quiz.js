import React from "react";

import QuizStudent from "../QuizStudent/QuizStudent";
import QuizSpeaker from "../QuizSpeaker/QuizSpeaker";
import QuizAdministrator from "../QuizAdministrator/QuizAdministrator";

const Quiz = () => {
  /*
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role] = React.useState("ROLE_SPEAKER");

  if (role === "ROLE_SUPERADMIN") return <QuizAdministrator />;
  else if (role === "ROLE_STUDENT") return <QuizStudent />;
  else if (role === "ROLE_SPEAKER") return <QuizSpeaker />;
};

Quiz.propTypes = {};

Quiz.defaultProps = {};

export default Quiz;
