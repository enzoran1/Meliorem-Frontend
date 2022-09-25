import React from 'react';
import styles from './Status.module.scss';

const Status = (props) => {



return(
  <div className={styles.Status} data-testid="Status">
    <div className={styles.Status_Top}>{props.title}</div>
    <div className={styles.Status_Bottom}>
    <div className="form-check form-switch">
    <input className="form-check-input appearance-none w-20 -ml-10 rounded-full float-left h-9 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
   
  </div>
    </div>
  </div>
);
}
Status.propTypes = {};

Status.defaultProps = {};

export default Status;
