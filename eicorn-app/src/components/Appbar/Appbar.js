import React from 'react';
import PropTypes from 'prop-types';
import styles from './Appbar.module.css';

const Appbar = () => (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="https://i.imgur.com/o28LcX6.png" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Download the app</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Hiring</a>
      </li>
    </ul>
  </div>
</nav>
  </>
);

Appbar.propTypes = {};

Appbar.defaultProps = {};

export default Appbar;
