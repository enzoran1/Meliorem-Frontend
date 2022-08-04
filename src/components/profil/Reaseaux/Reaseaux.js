import React, { Fragment } from "react";

const Reaseaux = (props) => (
  <Fragment>
    <img onClick={props.onClick} src={props.image} alt="" />
  </Fragment>
);

Reaseaux.propTypes = {};

Reaseaux.defaultProps = {};

export default Reaseaux;
