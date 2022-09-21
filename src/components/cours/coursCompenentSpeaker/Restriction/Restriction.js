import React from 'react';
import styles from './Restriction.module.scss';
import ButtonMore from '../../../buttons/ButtonMore/ButtonMore';

const Restriction = (props) => {



return(
  <div className={styles.Restriction} data-testid="Restriction">
    <div className={styles.Restriction_Top}>{props.title}</div>
    <div className={styles.Restriction_Bottom}> <ButtonMore/> </div>
  </div>
);
}
Restriction.propTypes = {};

Restriction.defaultProps = {};

export default Restriction;
