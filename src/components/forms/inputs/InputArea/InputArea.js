import React from "react";
import styles from "./InputArea.module.scss";

const InputArea = (props) => (
  <div className={styles.InputArea} data-testid="InputArea">
    <textarea
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.value}
      onChange={props.onChange}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
);

export default InputArea;
