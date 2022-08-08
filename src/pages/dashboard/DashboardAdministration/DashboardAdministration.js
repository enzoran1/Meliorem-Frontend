import React from "react";
import ButtonFilterBorder from "../../../components/buttons/ButtonFilterBorder/ButtonFilterBorder";
import ClassementBadges from "../../../components/classement/ClassementBadges/ClassementBadges";
import ClassementUserCard from "../../../components/classement/ClassementUserCard/ClassementUserCard";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import styles from "./DashboardAdministration.module.scss";
import Badges1 from "../../../images/classement/badge1.png";
import Badges2 from "../../../images/classement/badge2.png";
import Badges3 from "../../../images/classement/badge3.png";
import Badges4 from "../../../images/classement/badge4.png";
import GoldClass from "../../../components/medialles/GoldClass/GoldClass";
import BronzeClass from "../../../components/medialles/BronzeClass/BronzeClass";
import SilverClass from "../../../components/medialles/SilverClass/SilverClass";
import Pagination from "../../../components/pagination/Pagination/Pagination";

const DashboardAdministration = () => (
  <div
    className={styles.DashboardAdministration}
    data-testid="DashboardAdministration"
  >
    <div className={styles.DashboardAdministration_Header}>
      <InputSearchComplex />
      <div className={styles.FlexCenter}>
        <div className={styles.Header_Filter}>
         <ButtonFilterBorder
        style={{ borderColor: "#556BDA", cursor: "pointer" }}
        title="croissant"
        />
         <ButtonFilterBorder
        style={{ borderColor: "#556BDA", cursor: "pointer" }}
        title="Decroissant"
        />
          <ButtonFilterBorder
        style={{ borderColor: "orange", cursor: "pointer" }}
        title="Mon scrore"
      />
        </div>
        </div>
    </div>
    <div className={styles.DashboardAdministration_Body}>
       <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          medaille={<GoldClass />}
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
       <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          medaille={<SilverClass />}
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
       <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          medaille={<BronzeClass />}
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
        />
    </div>
    <div className={styles.DashboardAdministration_Footer}>
           <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
        
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
    
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
         <ClassementUserCard
          promotion="Developpeur full stack"
          name="Jean didier"
          
          imageFooters={[
            <ClassementBadges image={Badges1} />,
            <ClassementBadges image={Badges2} />,
            <ClassementBadges image={Badges3} />,
            <ClassementBadges image={Badges4} />,
          ]}
      />
    </div>
    <div className={styles.DashboardAdministration_Pagination}>
      <Pagination />
    </div>
  </div>
);

DashboardAdministration.propTypes = {};

DashboardAdministration.defaultProps = {};

export default DashboardAdministration;
