import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = (props) => (
  <h1>
    {props.text}
  </h1>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
