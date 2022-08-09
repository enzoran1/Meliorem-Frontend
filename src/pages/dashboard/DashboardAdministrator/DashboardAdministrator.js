import React from "react";

import styles from "./DashboardAdministrator.module.scss";
import CardSuperAdmin from "../../../components/CardSuperAdmin/CardSuperAdmin";
import LogoContact from "../../../images/superAdmin/contact.svg";
import LogoInterogation from "../../../images/superAdmin/interogation.svg";
import LogoUser from "../../../images/superAdmin/user.svg";
import LogoBadge from "../../../images/superAdmin/badge.svg";
import LogoCours from "../../../images/superAdmin/cours.svg";
import LogoMultiUser from "../../../images/superAdmin/multiUser.svg";

const DashboardAdministrator = () => (
  <div
    className={styles.DashboardAdministrator}
    data-testid="DashboardAdministrator"
  >
    <div className={styles.DashboardAdministrator_GridContainer}>
    <CardSuperAdmin title="Contact" image={LogoContact} />
    <CardSuperAdmin title="Quiz" image={LogoInterogation} />
    <CardSuperAdmin title="Utilisateurs" image={LogoUser} />
    <CardSuperAdmin title="Badges" image={LogoBadge} />
    <CardSuperAdmin title="Cours" image={LogoCours} />
    <CardSuperAdmin title="Classes" image={LogoMultiUser} />
    </div>
  </div>
);

DashboardAdministrator.propTypes = {};

DashboardAdministrator.defaultProps = {};

export default DashboardAdministrator;
