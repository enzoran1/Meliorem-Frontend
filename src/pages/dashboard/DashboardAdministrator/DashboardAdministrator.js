import React from "react";

import styles from "./DashboardAdministrator.module.scss";
import CardSuperAdmin from "../../../components/CardSuperAdmin/CardSuperAdmin";
import LogoContact from "../../../images/superAdmin/contact.svg";
import LogoInterogation from "../../../images/superAdmin/interogation.svg";
import LogoUser from "../../../images/superAdmin/user.svg";
import LogoBadge from "../../../images/superAdmin/badge.svg";
import LogoCours from "../../../images/superAdmin/cours.svg";
import LogoMultiUser from "../../../images/superAdmin/multiUser.svg";
import { Link } from "react-router-dom";

const DashboardAdministrator = () => (
  <div
    className={styles.DashboardAdministrator}
    data-testid="DashboardAdministrator"
  >
    <div className={styles.DashboardAdministrator_GridContainer}>
      <Link to="/contacts">
        <CardSuperAdmin title="Contact" image={LogoContact} />
      </Link>
      <Link to="/quizz">
        <CardSuperAdmin title="Quiz" image={LogoInterogation} />
      </Link>
      <Link to="/users">
        <CardSuperAdmin title="Utilisateurs" image={LogoUser} />
      </Link>
      <Link to="/badges-admin">
        <CardSuperAdmin title="Badges" image={LogoBadge} />
      </Link>
      <Link to="/cours">
        <CardSuperAdmin title="Cours" image={LogoCours} />
      </Link>
      <Link to="/groups">
        <CardSuperAdmin title="Classes" image={LogoMultiUser} />
      </Link>
    </div>
  </div>
);

DashboardAdministrator.propTypes = {};

DashboardAdministrator.defaultProps = {};

export default DashboardAdministrator;
