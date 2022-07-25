import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import AlertDanger from '../../components/alerts/AlertDanger/AlertDanger';




const Home = () => {


return (
  <div className={styles.Home} data-testid="Home">
    <AlertDanger title={sessionStorage.getItem("token")}/>
    
     
    </div>
);

}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
