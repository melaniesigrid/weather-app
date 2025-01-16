import moment from 'moment';
import getFontAwesomeIcon from './getFontAwesomeIcon';

const getUpcomingDaysForecast = (dailyForecasts) => dailyForecasts.map(
  (forecast) => (
    {
      weekday: moment(forecast.Date).format('ddd'),
      temperature: `${Math.round(forecast.Temperature.Maximum.Value)}°C`,
      weatherIcon: getFontAwesomeIcon(forecast.Day.IconPhrase),
      weatherDescription: forecast.Day.IconPhrase,
    }
  ),
);

export default getUpcomingDaysForecast;
