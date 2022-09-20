import React from "react";
import InputSearchComplex from "../../forms/inputs/InputSearchComplex/InputSearchComplex";
import styles from "./TableAdmin.module.scss";

const TableAdmin = (props) => {
  return (
    <div className={styles.TableAdmin} data-testid="TableAdmin">
      <div class={`max-w-7xl mx-auto sm:px-6 lg:px-8 `}>
        <div class="flex flex-col">
          <div class={`-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8`}>
            <div class=" inline-block w-full shadow overflow-x-auto sm:rounded-lg ">
              <table class={`min-w-full ${styles.TableAdmin_Container}`}>
                <thead className={styles.TableAdmin_Thead}>
                  <tr class="  text-xs leading-4 uppercase tracking-wider">
                    <th class="px-6 py-3 text-left font-medium">
                      <input
                        class="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </th>
                    {props.titles.map((title, index) => (
                      <th key={index} class="px-6 py-3 text-left font-medium">
                        {title}
                      </th>
                    ))}
                    <div className={styles.TableAdmin_Search}>
                      <th class={`px-6 py-3 text-left font-medium`}>
                        <InputSearchComplex onSubmit={props.onSearchSubmit}/>
                      </th>
                    </div>
                  </tr>
                </thead>
                <tbody class="">{props.children}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TableAdmin.propTypes = {};

TableAdmin.defaultProps = {};

export default TableAdmin;
