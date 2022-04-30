import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => (
  <button>{props.text}</button>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
