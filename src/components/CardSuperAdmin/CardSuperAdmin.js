import React from 'react';
import styles from './CardSuperAdmin.module.scss';
import ButtonDefaultLogoRigth from '../buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';

const CardSuperAdmin = (props) => (
  <div className={styles.CardSuperAdmin} data-testid="CardSuperAdmin">
    <h3>{props.title}</h3>
    <img src={props.image} alt="" />
     <ButtonDefaultLogoRigth title="Y-aller" />
  </div>
);

CardSuperAdmin.propTypes = {};

CardSuperAdmin.defaultProps = {};

export default CardSuperAdmin;
