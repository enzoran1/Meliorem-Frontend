import React from 'react';

import styles from './Section.module.scss';
import ButtonCross from '../../../buttons/ButtonCross/ButtonCross';
import ButtonPencils from '../../../buttons/ButtonPencils/ButtonPencils';

const Section = (props) => 
(
  <div className={styles.Section} style={props.style} data-testid="Section">
    <div className={styles.Section_Top}>
      <ButtonCross onClick={props.onClickCross}/>
    </div>
    <div className={styles.Section_Body}>
      <p>{props.title}</p>
    </div>
    <div className={styles.Section_Bottom}>
      <ButtonPencils onClick={props.onClickPencil}/>
    </div>
  </div>
);

Section.propTypes = {};

Section.defaultProps = {};

export default Section;
