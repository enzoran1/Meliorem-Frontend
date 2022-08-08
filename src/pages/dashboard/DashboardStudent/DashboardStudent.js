import React from "react";

import styles from "./DashboardStudent.module.scss";
import ClassementUserCard from "../../../components/classement/ClassementUserCard/ClassementUserCard";
import ClassementBadges from "../../../components/classement/ClassementBadges/ClassementBadges";
import GoldClass from "../../../components/medialles/GoldClass/GoldClass";
import Badges1 from "../../../images/classement/badge1.png";
import Badges2 from "../../../images/classement/badge2.png";
import Badges3 from "../../../images/classement/badge3.png";
import Badges4 from "../../../images/classement/badge4.png";
import ButtonViewMore from "../../../components/buttons/ButtonViewMore/ButtonViewMore";
import Gold from "../../../components/medialles/Gold/Gold";
import Silver from "../../../components/medialles/Silver/Silver";
import Bronze from "../../../components/medialles/Bronze/Bronze";
import MedailleView from "../../../components/medialles/MedailleView/MedailleView";
import BadgesSucess from "../../../components/badges/BadgesSucess/BadgesSucess";
import SilverClass from "../../../components/medialles/SilverClass/SilverClass";
import BronzeClass from "../../../components/medialles/BronzeClass/BronzeClass";

const DashboardStudent = () => (
  <div className={styles.DashboardStudent} data-testid="DashboardStudent">
    <div className={styles.DashboardStudent__container}>
      <div className={styles.DashboardStudent_Classement}>
        <div className={styles.Classement_Header}>
          <p>Classement</p>
        </div>
        <div className={styles.Classement_Body}>
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
        <div className={styles.Classement_Footer}>
          <ButtonViewMore />
        </div>
      </div>

      <div className={styles.DashboardStudent_Medailles}>
        <div className={styles.Medailles_Header}>
          <div className={styles.Medailles_Header_Number}>
            <Gold />
            <p>1</p>
          </div>
          <div className={styles.Medailles_Header_Number}>
            <Silver />
            <p>2</p>
          </div>
          <div className={styles.Medailles_Header_Number}>
            <Bronze />
            <p>3</p>
          </div>
        </div>
        <div className={styles.Medailles_Body}>
          <MedailleView
            progress="44"
            image={<Gold />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="90"
            image={<Silver />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="65"
            image={<Bronze />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="90"
            image={<Silver />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="90"
            image={<Silver />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="65"
            image={<Bronze />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="44"
            image={<Gold />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="65"
            image={<Bronze />}
            niveau="3"
            intituler="Les tableaux"
          />
          <MedailleView
            progress="44"
            image={<Gold />}
            niveau="3"
            intituler="Les tableaux"
          />
        </div>
        <div className={styles.Medailles_Footer}>
          <ButtonViewMore />
        </div>
      </div>

      <div className={styles.DashboardStudent_Badges}>
        <div className={styles.Badges_Header}>
          <p>Badges</p>
        </div>
        <div className={styles.Badges_Body}>
          <BadgesSucess
            description="la description du badges sucess frfr rfrg fr rffre frf"
            title="Le titre"
            image={Badges1}
          />
          <BadgesSucess
            description="la description du badges sucess frfr rfrg fr rffre frf"
            title="Le titre"
            image={Badges2}
          />
          <BadgesSucess
            description="la description du badges sucess frfr rfrg fr rffre frf"
            title="Le titre"
            image={Badges3}
          />
          <BadgesSucess
            description="la description du badges sucess frfr rfrg fr rffre frf"
            title="Le titre"
            image={Badges4}
          />
        </div>
        <div className={styles.Badges_Footer}>
          <ButtonViewMore />
        </div>
      </div>
    </div>
  </div>
);

DashboardStudent.propTypes = {};

DashboardStudent.defaultProps = {};

export default DashboardStudent;
