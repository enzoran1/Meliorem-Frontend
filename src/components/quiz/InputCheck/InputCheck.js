import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputCheck.module.scss';

const InputCheck = (props) => {

let choice;
function getColor() {
  if (props.isCorrect) {
    return 'text-green-800';
  } else if (props.isWrong) {
    return 'text-red-800';
  }else
  return 'text-gray-100';
}



if(props.isRadio){
  choice = 
  <div className={`form-check ${styles.FormCheck}`} >
        <input disabled={props.disabled} checked={props.checked} name={props.name} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio"  id={props.name}/>
       
        <label className={"form-check-label inline-block " + getColor()} for={props.name}>
            {props.title}
        </label>
       
    </div>
} else {
  choice =
  <div className={`form-check ${styles.FormCheck}`}>
      <input disabled={props.disabled} checked={props.checked} name={props.name} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id={props.name}/>
       
        <label className={"form-check-label inline-block "+ getColor()} for={props.name}>
            {props.title}
        </label>
    </div>
}






return(
  <div className={styles.InputCheck} data-testid="InputCheck">
    {choice}
  </div>
);
}

InputCheck.propTypes = {};

InputCheck.defaultProps = {};

export default InputCheck;
