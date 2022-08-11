import React from "react";
import styles from "./QuizAvatar.module.scss";

const QuizAvatar = (props) => (
  <div className={styles.QuizAvatar}>
    <img src={props.avatar} className="rounded-full w-12" alt="Avatar" />
  </div>
);

QuizAvatar.propTypes = {};

QuizAvatar.defaultProps = {
  avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
};

export default QuizAvatar;
