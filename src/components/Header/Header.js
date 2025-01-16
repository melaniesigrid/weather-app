import React from 'react';

import styles from './Header.module.css';

const Header = () => (
  <div className="myContainer">
    <h1 className={styles.heading}>
      <span className={styles.light}>Weather</span>
      {' '}
      Forecast
    </h1>
    <p className={styles.description}>
      Created by
      {' '}
      <a
        href="https://melaniesigrid.github.io/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Melanie Baratto
      </a>
      .
      <br />
      Updated from MetaWeather to AccuWeather API Jan 2025.
    </p>
  </div>
);

export default Header;
