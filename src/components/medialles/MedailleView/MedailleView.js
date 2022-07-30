import React from "react";
import styles from "./MedailleView.module.scss";
import Testprogress from "../../quiz/Testprogress/Testprogress";
import Trophy from "../Trophy/Trophy";

const MedailleView = (props) => (
  <div className={styles.MedailleView} data-testid="MedailleView">
    <div className={styles.MedailleView_Header}>
      <Testprogress progress={ props.progress } />
      <Trophy/>
    </div>
    <div className={styles.MedailleView_Footer}>

      <div className={styles.Footer_Right}>
        {props.image} 
      </div>
      <div className={styles.Footer_Left}>
        <h3>Niveau {props.niveau}</h3>
        <p>{ props.intituler }</p>
      </div>

    </div>
  </div>
);

MedailleView.propTypes = {};

MedailleView.defaultProps = {};

export default MedailleView;
