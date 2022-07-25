import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import AlertDanger from '../../components/alerts/AlertDanger/AlertDanger';
import ButtonArrowSolid from '../../components/buttons/ButtonArrowSolid/ButtonArrowSolid';
import ButtonArrowOutlineWhite from '../../components/buttons/ButtonArrowOutlineWhite/ButtonArrowOutlineWhite';
import ButtonArrowOutlinePurpel from '../../components/buttons/ButtonArrowOutlinePurpel/ButtonArrowOutlinePurpel';
import ButtonMore from '../../components/buttons/ButtonMore/ButtonMore';
import ButtonSwitch from '../../components/buttons/ButtonSwitch/ButtonSwitch';
import ButtonCross from '../../components/buttons/ButtonCross/ButtonCross';
import ButtonPencils from '../../components/buttons/ButtonPencils/ButtonPencils';
import ButtonDefaultLogoRigth from '../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth';




const Home = () => {


return (
  <div className={styles.Home} data-testid="Home">
    <AlertDanger title={sessionStorage.getItem("token")}/>
    <ButtonArrowSolid/><br/>
    <ButtonArrowOutlineWhite/><br/>
    <ButtonArrowOutlinePurpel/><br/>
    <ButtonMore/><br/>
    <ButtonSwitch/><br/>
    <ButtonCross/><br/>
    <ButtonPencils/><br/>
    <ButtonDefaultLogoRigth title="Suivant" image={<ButtonArrowOutlineWhite/>}/>


    
     
    </div>
);

}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
