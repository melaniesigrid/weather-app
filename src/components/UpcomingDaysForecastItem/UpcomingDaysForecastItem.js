import React from 'react';
import PropTypes from 'prop-types';
import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ weekday, temperature, weatherIcon }) => (
  <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
    <i className={`${weatherIcon} fa-2x mb-2`} aria-hidden="true" />
    <span className="mb-2">{weekday}</span>
    <span className="font-weight-bold">
      {temperature}
      &deg;
    </span>
  </li>
);

UpcomingDaysForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;
