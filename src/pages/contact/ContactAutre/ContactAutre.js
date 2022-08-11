import React from "react";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import CardContact from "../../../components/CardContact/CardContact";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Pagination from "../../../components/pagination/Pagination/Pagination";

import styles from "./ContactAutre.module.scss";

const ContactAutre = () => (
  <div className={styles.ContactAutre} data-testid="ContactAutre">
    <div className={styles.ContactAutre_Search}>
      <div className={styles.Search_Top}>
        <InputSearchComplex />
      </div>
      <div className={styles.Search_Bottom}>
        <BadgeFilterSolid
          style={{ backgroundColor: "orange", cursor: "pointer" }}
          title="Administrations"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "violet", cursor: "pointer" }}
          title="Intervenant"
        />
        <BadgeFilterSolid
          style={{ backgroundColor: "green", cursor: "pointer" }}
          title="Direction"
        />
      </div>
    </div>

    <div className={styles.Container_Grid}>
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
      <CardContact
        name="Carlos Ippo"
        role="Directeur général"
        email="carlos.ippo@gmail.com"
        tel="+33 6 12 34 56 78"
        telLogo="+33 6 12 34 56 78"
        emailLogo="enzo.franceschinidev@gmail.com"
      />
    </div>

    <div className={styles.ContactAutre_Pagination}>
      <Pagination />
    </div>
  </div>
);

ContactAutre.propTypes = {};

ContactAutre.defaultProps = {};

export default ContactAutre;
