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

const Home = () => {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className={styles.Home} data-testid="Home">
      <AlertDanger title={sessionStorage.getItem("token")} />
      <ButtonArrowSolid onClick={() => handleClick()} />
      <br />
      <ButtonArrowOutlineWhite onClick={() => handleClick()} />
      <br />
      <ButtonArrowOutlinePurpel onClick={() => handleClick()} />
      <br />
      <ButtonMore onClick={() => handleClick()} />
      <br />
      <ButtonSwitch onClick={() => handleClick()} />
      <br />
      <ButtonCross onClick={() => handleClick()} color="red" />
      <br />
      <ButtonPencils onClick={() => handleClick()} />
      <br />
      <ButtonDefaultLogoRigth onClick={() => handleClick()} title="Suivant" />
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
    </div>
  );
};

export default Home;
