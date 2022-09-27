import React from 'react';
import styles from './AddPage.module.scss';
import ButtonMore from '../../../buttons/ButtonMore/ButtonMore';

const AddPage = (props) => (
  <div className={styles.AddPage} style={props.style} onClick={props.onClick} data-testid="AddPage">
    <div className={styles.AddPage_Top}>
      {props.title}
    </div>
    <div className={styles.AddPage_Bottom}>
      <ButtonMore/>
    </div>
  </div>
);

AddPage.propTypes = {};

AddPage.defaultProps = {};

export default AddPage;
