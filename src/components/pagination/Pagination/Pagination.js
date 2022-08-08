import React from "react";
import styles from "./Pagination.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = () => (
  <div className={styles.Pagination}>
    <div className=" px-4 py-3 flex items-center justify-between  sm:px-6">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div className={styles.Chevron}>
            <a
              href="http"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md  "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              </div>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="http"
              aria-current="page"
              className="z-10 relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              1
            </a>
            <a
              href="http"
              className=" relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              2
            </a>
            <a
              href="http"
              className=" hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
            >
              3
            </a>
            <div className={styles.Chevron}>
            <span className="relative inline-flex items-center px-4 py-2  ">
              ...
              </span>
              </div>
            <a
              href="http"
              className=" hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
            >
              8
            </a>
            <a
              href="http"
              className=" relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              9
            </a>
            <a
              href="http"
              className=" relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              10
            </a>
            <div className={styles.Chevron}>
            <a
              href="http"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md "
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
