import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './FormContainer.module.scss';
import LogoMelo from '../../../../images/logos/logomelo.png';

const FormContainer = (props) => (
  <Fragment>
     <form onSubmit={props.onSubmit} className={styles.Container__Form} noValidate>
      <div className={styles.Form_Logo}>
          <img src={LogoMelo} alt="" />
      </div>
      <div className={styles.Form_Title}>
        <p>Formulaire de connexion</p>
      </div>
      <div className={styles.Form_Input}>
        {props.children}
      </div>
      <div className={styles.Form_Btn}>
       
      </div>
   
    </form>
  </Fragment>
);

FormContainer.propTypes = {};

FormContainer.defaultProps = {};

export default FormContainer;
