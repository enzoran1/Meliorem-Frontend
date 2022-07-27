import React, { Fragment } from "react";
import styles from "./InputSearch.module.scss";

const InputSearch = (props) => (
  <Fragment className={styles.InputSearch} data-testid="InputSearch">
    <input
      type="search"
      class="
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
      id="exampleSearch2"
      placeholder={props.search}
    />
  </Fragment>
);

export default InputSearch;
