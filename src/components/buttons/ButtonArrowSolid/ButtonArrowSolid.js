import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonArrowSolid.module.scss';

const ButtonArrowSolid = (props) => (
  <div className={styles.ButtonArrowSolid}>
  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32ZM23.414 14.586L17.414 8.586C17.0368 8.22168 16.5316 8.02009 16.0072 8.02465C15.4828 8.02921 14.9812 8.23955 14.6104 8.61036C14.2395 8.98118 14.0292 9.4828 14.0247 10.0072C14.0201 10.5316 14.2217 11.0368 14.586 11.414L17.172 14H10C9.46957 14 8.96086 14.2107 8.58579 14.5858C8.21071 14.9609 8 15.4696 8 16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H17.172L14.586 20.586C14.395 20.7705 14.2426 20.9912 14.1378 21.2352C14.033 21.4792 13.9778 21.7416 13.9755 22.0072C13.9732 22.2728 14.0238 22.5361 14.1244 22.7819C14.2249 23.0277 14.3734 23.251 14.5612 23.4388C14.749 23.6266 14.9723 23.7751 15.2181 23.8756C15.4639 23.9762 15.7272 24.0268 15.9928 24.0245C16.2584 24.0222 16.5208 23.967 16.7648 23.8622C17.0088 23.7574 17.2295 23.605 17.414 23.414L23.414 17.414C23.7889 17.0389 23.9996 16.5303 23.9996 16C23.9996 15.4697 23.7889 14.9611 23.414 14.586Z" fill="#495ECA"/>
  </svg>
  </div>
);

ButtonArrowSolid.propTypes = {};

ButtonArrowSolid.defaultProps = {};

export default ButtonArrowSolid;
