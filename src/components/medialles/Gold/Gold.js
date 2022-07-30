import React from "react";

import styles from "./Gold.module.scss";
import Logo from "../../../images/medialles/Gold.png";

const Gold = () =>
<div className={styles.Gold} data-testid="Gold">
    <img src={Logo} alt="" />
</div>;

Gold.propTypes = {};

Gold.defaultProps = {};

export default Gold;
