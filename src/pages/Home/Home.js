import React from "react";
import styles from "./Home.module.scss";
import AlertDanger from "../../components/alerts/AlertDanger/AlertDanger";
import ButtonArrowSolid from "../../components/buttons/ButtonArrowSolid/ButtonArrowSolid";
import ButtonArrowOutlineWhite from "../../components/buttons/ButtonArrowOutlineWhite/ButtonArrowOutlineWhite";
import ButtonArrowOutlinePurpel from "../../components/buttons/ButtonArrowOutlinePurpel/ButtonArrowOutlinePurpel";
import ButtonMore from "../../components/buttons/ButtonMore/ButtonMore";
import ButtonSwitch from "../../components/buttons/ButtonSwitch/ButtonSwitch";
import ButtonCross from "../../components/buttons/ButtonCross/ButtonCross";
import ButtonPencils from "../../components/buttons/ButtonPencils/ButtonPencils";
import ButtonDefaultLogoRigth from "../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth";
import ButtonViewMore from "../../components/buttons/ButtonViewMore/ButtonViewMore";
import ButtonEdit from "../../components/buttons/ButtonEdit/ButtonEdit";
import ButtonDelete from "../../components/buttons/ButtonDelete/ButtonDelete";
import BadgeFilterSolid from "../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonFilterBorder from "../../components/buttons/ButtonFilterBorder/ButtonFilterBorder";
import Testprogress from "../../components/quiz/Testprogress/Testprogress";
import QuizView from "../../components/quiz/QuizView/QuizView";
import CoursCard from "../../components/cours/CoursCard/CoursCard";
import ImageCours from "../../images/image_cours.png";

import CoursCardsProgress from "../../components/cours/CoursCardsProgress/CoursCardsProgress";
import Gold from "../../components/medialles/Gold/Gold";
import Silver from "../../components/medialles/Silver/Silver";
import Bronze from "../../components/medialles/Bronze/Bronze";
import MedailleView from "../../components/medialles/MedailleView/MedailleView";
import GoldClass from "../../components/medialles/GoldClass/GoldClass";
import ClassementUserCard from "../../components/classement/ClassementUserCard/ClassementUserCard";
import ClassementBadges from "../../components/classement/ClassementBadges/ClassementBadges";
import Badges1 from "../../images/classement/badge1.png";
import Badges2 from "../../images/classement/badge2.png";
import Badges3 from "../../images/classement/badge3.png";
import Badges4 from "../../images/classement/badge4.png";
import BadgesSucess from "../../components/badges/BadgesSucess/BadgesSucess";
import CardProfil from "../../components/profil/CardProfil/CardProfil";
import imageprofil from "../../images/profil/image_profil.jpg";
import reseau1 from "../../images/profil/insta.png";
import reseau2 from "../../images/profil/facebook.png";
import reseau3 from "../../images/profil/twitter.png";
import reseau4 from "../../images/profil/twitch.png";
import Reaseaux from "../../components/profil/Reaseaux/Reaseaux";
import CardSuperAdmin from "../../components/CardSuperAdmin/CardSuperAdmin";
import LogoContact from "../../images/superAdmin/contact.svg";
import TableAdmin from "../../components/tables/TableAdmin/TableAdmin";
import QuizAvatar from "../../components/quiz/QuizAvatar/QuizAvatar";
import Modal from "../../components/modal/Modal/Modal";
import QuizCardCrud from "../../components/quiz/QuizCardCrud/QuizCardCrud";
import ButtonActivity from "../../components/buttons/ButtonActivity/ButtonActivity";
import paginations from "../../modules/Paginations";

const Home = () => {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className={styles.Home} data-testid="Home">
      <AlertDanger title={sessionStorage.getItem("token")} />
      <ButtonArrowSolid onClick={() => handleClick()} />
      <br />
      <ButtonArrowOutlineWhite onClick={<Modal useState={true} />} />
      <br />
      <ButtonArrowOutlinePurpel />
      <br />
      <ButtonMore onClick={() => handleClick()} />
      <br />
      <ButtonSwitch onClick={() => handleClick()} />
      <br />
      <ButtonCross onClick={() => handleClick()} color="red" />
      <br />
      <ButtonPencils onClick={() => handleClick()} />
      <br />
      <ButtonDefaultLogoRigth title="Suivant" />
      <br />
      <ButtonViewMore onClick={() => handleClick()} />
      <br></br>
      <ButtonEdit onClick={() => handleClick()} />
      <br />
      <ButtonDelete onClick={() => handleClick()} />
      <br />
      <ButtonFilterBorder
        onClick={() => handleClick()}
        style={{ borderColor: "orange", cursor: "pointer" }}
        title="mon button"
      />
      <br></br>
      <BadgeFilterSolid
        onClick={() => handleClick()}
        style={{ backgroundColor: "orange", cursor: "pointer" }}
        title="mon badge"
      />
      <br></br>
      <Testprogress progress="25" />
      <br />
      <div className={styles.ContainerQuiz}>
        <QuizView
          title="Le titre de mon quiz pour le test template"
          identity="Carlos Roberto"
          date="12/12/2020"
          numberQuestion="10"
        />
      </div>
      <br />
      <div className={styles.ContainerQuiz}>
        <CoursCard
          title="Le titre de mon cours pour le test template de la mort mec des angular"
          identity="Carlos Roberto"
          date="12/12/2020"
          image={ImageCours}
        />
        <br />
      </div>
      <br></br>
      <div className={styles.ContainerQuiz}>
        <CoursCardsProgress
          user="Jeremy Bargade"
          title="Le scss pour les nuls et les trés nuls"
          date="25/05/2022"
        />
      </div>
      <br />
      <div className={styles.ContainerQuiz}>
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
      </div>
      <br />
      <div className={styles.ContainerQuiz}>
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
      </div>
      <BadgesSucess
        description="la description du badges sucess frfr rfrg fr rffre frf"
        title="Le titre"
      />

      <br />

      <CardProfil
        nom="Jean didier"
        classe="Developpeur full stack"
        email=" monemail@gmail.com"
        image={imageprofil}
        imageFooters={[
          <Reaseaux onClick={() => handleClick()} image={reseau1} />,
          <Reaseaux onClick={() => handleClick()} image={reseau2} />,
          <Reaseaux onClick={() => handleClick()} image={reseau3} />,
          <Reaseaux onClick={() => handleClick()} image={reseau4} />,
        ]}
      />
      <br />
      <CardSuperAdmin title="Contact" image={LogoContact} />
      <br />

      <br />
      <div className={styles.testavatar}>
        <QuizAvatar />
      </div>
      <QuizCardCrud
        title=" le titre de mon quiz"
        badges={
          <BadgeFilterSolid
            style={{ backgroundColor: "orange", cursor: "pointer" }}
            title="en cours"
          />
        }
        description="la description de mon quiz"
        date="12/12/2020"
        btnActivity={<ButtonActivity />}
        btnDelete={<ButtonDelete onClick={() => handleClick()} />}
        btnEdit={<ButtonEdit onClick={() => handleClick()} />}
      />
    </div>
  );
};

export default Home;
