import React from "react";
import styles from "./TableAdmin.module.scss";

const TableAdmin = () => {
  return (
    <div className={styles.TableAdmin} data-testid="TableAdmin">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col">
          <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class=" inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
              <table class="min-w-full">
                <thead>
                  <tr class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                    <th class="px-6 py-3 text-left font-medium">
                      <input
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </th>
                    <th class="px-6 py-3 text-left font-medium">Name</th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <input
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div class="text-sm leading-5 text-gray-900">
                        pagename
                      </div>
                    </td>
                  </tr>
                </tbody>
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
