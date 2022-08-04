import React, { Fragment } from 'react';
import styles from './CardProfil.module.scss';

const CardProfil = (props) => (
  <div className={styles.CardProfil} data-testid="CardProfil">
    <div className={styles.CardProfil_Content_Top}>
      <img src={props.image} alt="" />
    </div>
    <div className={styles.CardProfil_Content_Bottom}>
      <h3>{props.nom}</h3>
      <p>{props.classe}</p>
      <span>{props.email}</span>
      <div className={styles.Bottom_image}>
       {props.imageFooters.map((imageFooter,index) => (
           <Fragment key={index} >
             {imageFooter}
          </Fragment>
       ))}
      </div>
    </div>
  </div>
);

CardProfil.propTypes = {};

CardProfil.defaultProps = {};

export default CardProfil;
