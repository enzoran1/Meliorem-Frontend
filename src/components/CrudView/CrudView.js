import React from "react";

import styles from "./CrudView.module.scss";

const CrudView = (props) => {
  // props.data = [{id: "nom", value: "test"}, {id: "prenom", value: "test2"}, {id: "color", value: "#546789",type : "color"}]

  return (
    <div className={styles.CrudView} data-testid="CrudView">
      <ul>
        {props.data.map((item, index) => {
          if (item.type && item.type === "color") {
            return (
              <li key={index}>
                {item.id} :{" "}
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    backgroundColor: item.value,
                  }}
                ></div>
              </li>
            );
          } else {
            return (
              <li key={index}>
                {item.id} : {item.value}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
CrudView.propTypes = {};

CrudView.defaultProps = {};

export default CrudView;
