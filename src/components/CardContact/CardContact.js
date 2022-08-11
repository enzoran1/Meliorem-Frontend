import React from "react";
import styles from "./CardContact.module.scss";
import QuizAvatar from "../quiz/QuizAvatar/QuizAvatar";
import LogoMail from "../../images/profil/mail.png";
import LogoTel from "../../images/profil/tel.png";

const CardContact = (props) => (
  <div className={styles.CardContact} data-testid="CardContact">
    <div className={styles.CardContact_Header}>
      <QuizAvatar avatar={props.photo} />
    </div>
    <div className={styles.CardContact_Body}>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <span>{props.email}</span>
      <span>{props.tel}</span>
    </div>
    <div className={styles.CardContact_Footer}>
      <a href={`tel:${props.telLogo}`}>
        <img src={LogoTel} alt="" />
      </a>

      <a href={`mailto:${props.emailLogo}`}>
        <img src={LogoMail} alt="" />
      </a>
    </div>
  </div>
);

CardContact.propTypes = {};

CardContact.defaultProps = {};

export default CardContact;
