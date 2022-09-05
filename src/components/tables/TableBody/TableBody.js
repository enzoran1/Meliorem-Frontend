import React from "react";

import styles from "./TableBody.module.scss";

import ButtonDelete from "../../buttons/ButtonDelete/ButtonDelete";
import ButtonEdit from "../../buttons/ButtonEdit/ButtonEdit";

const TableBody = (props) => {
  function renderButton() {
    let buttons = [];
    if (props.onClickEdit) {
      buttons.push(
        <div className={styles.Btn_1} key={0}>
          <ButtonEdit onClick={props.onClickEdit} />
        </div>
      );
    }
    if (props.onClickDelete) {
      buttons.push(
        <div className={styles.Btn_2} key={1}>
          <ButtonDelete onClick={props.onClickDelete} />
        </div>
      );
    }
    return buttons;
  }

  return (
    <tr className={styles.Table_Tr}>
      <td class="px-6 py-4 whitespace-no-wrap border-b ">
        <input
          class="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
          type="checkbox"
        />
      </td>
      {props.attributes.map((attribute, index) => (
        <td
          onClick={props.onClickView}
          key={index}
          className={`px-6 py-4 whitespace-no-wrap border-b ${styles.Table_Td}`}
        >
          <div className="text-sm leading-5">{attribute}</div>
        </td>
      ))}

      <td
        class={`px-6 py-4 whitespace-no-wrap text-right border-b text-sm leading-5 font-medium ${styles.Btn}`}
      >
        {renderButton()}
      </td>
    </tr>
  );
};

TableBody.propTypes = {};

TableBody.defaultProps = {};

export default TableBody;
