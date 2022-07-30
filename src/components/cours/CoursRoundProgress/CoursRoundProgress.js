import React from 'react';
import styles from './CoursRoundProgress.module.scss';

const CoursRoundProgress = (props) => (
  <div className={styles.CoursRoundProgress} data-testid="CoursRoundProgress">
    <span>
      {props.title}%
     </span>
  </div>
);

CoursRoundProgress.propTypes = {};

CoursRoundProgress.defaultProps = {};

export default CoursRoundProgress;
