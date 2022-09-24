import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactAdd.module.scss';

const ContactAdd = (props) => (
  <div className={styles.ContactAdd} data-testid="ContactAdd">
    ContactAdd Component
  </div>
);

ContactAdd.propTypes = {};

ContactAdd.defaultProps = {};

export default ContactAdd;
