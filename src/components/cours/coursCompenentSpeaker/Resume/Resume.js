import React from 'react';

import styles from './Resume.module.scss';

import ButtonPencils from '../../../buttons/ButtonPencils/ButtonPencils';

const Resume = (props) => (
  <div className={styles.Resume} data-testid="Resume">
    <div className={styles.Resume_Header}>
      <div className={styles.Header_Left}>
        <h1>{props.title}</h1>
      </div>

      <div className={styles.Header_Right}>
        {props.badges1}
      
    </div>
    </div>
    <div className={styles.Resume_Body}>
      <p>{props.description}</p>
    </div>
    <div className={styles.Resume_Footer}>
      <div className={styles.Footer_Left}>
        <p>{props.date}</p>
        {props.badges2}
        
      </div>
      <div className={styles.Footer_Right}>
        <ButtonPencils/>
      </div>

    </div>
  </div>
);

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
