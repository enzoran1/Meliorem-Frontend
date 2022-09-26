import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonAdd.module.scss';
import ButtonMore from '../ButtonMore/ButtonMore';
import ButtonSup from '../ButtonSup/ButtonSup';

const ButtonAdd = (props) => {
  let button;
  if (props.isSup)
    button =
    <>
    <span>{props.title}</span>
    <p>
      <ButtonSup/>
    </p>
    </>
    
  else
    button = 
    <>
    <span>{props.title}</span>
    <p>
      <ButtonMore/>
    </p>
    </>
  

return(
  <div className={styles.ButtonAdd} data-testid="ButtonAdd">
    {button}
  </div>
);
}

ButtonAdd.propTypes = {};

ButtonAdd.defaultProps = {};

export default ButtonAdd;
