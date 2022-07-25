import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonCross.module.scss';

const ButtonCross = () => (
  <div className={styles.ButtonCross} data-testid="ButtonCross">
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 1.28966C0.480314 1.10219 0.734622 0.996877 0.999786 0.996877C1.26495 0.996877 1.51926 1.10219 1.70679 1.28966L5.99979 5.58266L10.2928 1.28966C10.385 1.19415 10.4954 1.11797 10.6174 1.06556C10.7394 1.01315 10.8706 0.985567 11.0034 0.984413C11.1362 0.983259 11.2678 1.00856 11.3907 1.05884C11.5136 1.10912 11.6253 1.18338 11.7192 1.27727C11.8131 1.37116 11.8873 1.48281 11.9376 1.60571C11.9879 1.72861 12.0132 1.86029 12.012 1.99306C12.0109 2.12584 11.9833 2.25706 11.9309 2.37907C11.8785 2.50107 11.8023 2.61142 11.7068 2.70366L7.41379 6.99666L11.7068 11.2897C11.8889 11.4783 11.9897 11.7309 11.9875 11.9931C11.9852 12.2553 11.88 12.5061 11.6946 12.6915C11.5092 12.8769 11.2584 12.9821 10.9962 12.9843C10.734 12.9866 10.4814 12.8858 10.2928 12.7037L5.99979 8.41066L1.70679 12.7037C1.51818 12.8858 1.26558 12.9866 1.00339 12.9843C0.741188 12.9821 0.490376 12.8769 0.304968 12.6915C0.11956 12.5061 0.0143906 12.2553 0.0121121 11.9931C0.00983372 11.7309 0.110629 11.4783 0.292787 11.2897L4.58579 6.99666L0.292787 2.70366C0.105316 2.51614 0 2.26183 0 1.99666C0 1.7315 0.105316 1.47719 0.292787 1.28966Z" fill="#F03737"/>
    </svg>
  </div>
);

ButtonCross.propTypes = {};

ButtonCross.defaultProps = {};

export default ButtonCross;