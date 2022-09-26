import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputCheck.module.scss';

const InputCheck = (props) => {

let choice;



if(props.isRadio){
  choice = 
  <div className={`form-check ${styles.FormCheck}`} >
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        { props.correct ? 
        <label className="form-check-label inline-block text-green-800" for="flexRadioDefault1">
            {props.title}
        </label>
        : <label className="form-check-label inline-block text-red-800" for="flexRadioDefault1">
            {props.title}
        </label>
        }
    </div>
} else {
  choice =
  <div className={`form-check ${styles.FormCheck}`}>
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      { props.correct ? 
        <label className="form-check-label inline-block text-green-800" for="flexRadioDefault1">
            {props.title}
        </label>
        : <label className="form-check-label inline-block text-red-800" for="flexRadioDefault1">
            {props.title}
        </label>
        }
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
