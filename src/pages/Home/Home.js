import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    mon home de home
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
