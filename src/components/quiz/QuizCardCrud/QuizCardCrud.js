import React from 'react';
import styles from './QuizCardCrud.module.scss';

const QuizCardCrud = (props) => (
  <div className={styles.QuizCardCrud} data-testid="QuizCardCrud">
    <div className={styles.QuizCardCrud_Header}>
      <h3>{props.title}</h3>
      <div>
        {props.badges}
      </div>
    </div>
    <div className={styles.QuizCardCrud_Body}>
      <p>{props.description}</p>
      <span>{ props.date }</span>
    </div>
    <div className={styles.QuizCardCrud_Footer}>
      <div className={styles.Footer_Left}>
        {props.btnActivity}
      </div>
      <div className={styles.Footer_Right}>
        {props.btnDelete}
        {props.btnEdit}
      </div>
    </div>
  </div>
);

QuizCardCrud.propTypes = {};

QuizCardCrud.defaultProps = {};

export default QuizCardCrud;
