import React from "react";
import InputSearchComplex from "../../forms/inputs/InputSearchComplex/InputSearchComplex";
import styles from "./TableAdmin.module.scss";

const TableAdmin = (props) => {
  return (
    <div className={styles.TableAdmin} data-testid="TableAdmin">
      <div className={`max-w-7xl mx-auto sm:px-6 lg:px-8 `}>
        <div className="flex flex-col">
          <div className={`-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8`}>
            <div className=" inline-block w-full shadow overflow-x-auto sm:rounded-lg ">
              <table className={`min-w-full ${styles.TableAdmin_Container}`}>
                <thead className={styles.TableAdmin_Thead}>
                  <tr className="  text-xs leading-4 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">
                      <input
                        className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </th>
                    {props.titles.map((title, index) => (
                      <th key={index} className="px-6 py-3 text-left font-medium">
                        {title}
                      </th>
                    ))}
                    <div className={styles.TableAdmin_Search}>
                      <th className={`px-6 py-3 text-left font-medium`}>
                        {props.disableSearch ? null :<InputSearchComplex onSubmit={props.onSearchSubmit}/> }
                      </th>
                    </div>
                  </tr>
                </thead>
                <tbody className="">{props.children}</tbody>
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
