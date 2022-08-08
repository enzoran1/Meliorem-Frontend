import React from "react";
import PropTypes from "prop-types";
import styles from "./Quiz.module.scss";
import QuizAdministration from "../QuizAdministration/QuizAdministration";
import QuizStudent from "../QuizStudent/QuizStudent";
import QuizSpeaker from "../QuizSpeaker/QuizSpeaker";
import QuizAdministrator from "../QuizAdministrator/QuizAdministrator";

const Quiz = () => {
  /*
   * ROLE_ADMINISTRATION
   * ROLE_STUDENT
   * ROLE_SPEAKER
   * ROLE_SUPERADMIN
   */
  const [role, setRole] = React.useState("ROLE_STUDENT");

  if (role == "ROLE_ADMINISTRATION") return <QuizAdministration />;
  else if (role == "ROLE_STUDENT") return <QuizStudent />;
  else if (role == "ROLE_SPEAKER") return <QuizSpeaker />;
  else if (role == "ROLE_SUPERADMIN") return <QuizAdministrator />;
};

Quiz.propTypes = {};

Quiz.defaultProps = {};

export default Quiz;
