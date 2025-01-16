/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';
import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => (
  <Container className={styles.box}>
    <Row>
      <Col xs={12} md={4}>
        <div className={styles.card}>
          <CurrentDay {...forecast.currentDay} />
        </div>
      </Col>
      <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </Col>
    </Row>
  </Container>
);

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object.isRequired,
    currentDayDetails: PropTypes.array.isRequired,
    upcomingDays: PropTypes.array.isRequired,
  }),
};

export default Forecast;
