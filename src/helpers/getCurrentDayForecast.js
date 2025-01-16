import moment from 'moment';
import getFontAwesomeIcon from './getFontAwesomeIcon';

const getCurrentDayForecast = (data, location) => {
  const formattedForecast = {
    weekday: moment(data.LocalObservationDateTime).format('dddd'),
    date: moment(data.LocalObservationDateTime).format('MMMM Do'),
    location,
    temperature: Math.round(data.Temperature.Metric.Value),
    weatherIcon: getFontAwesomeIcon(data.WeatherText, data.PrecipitationType),
    weatherDescription: data.WeatherText,
  };

  return formattedForecast;
};

export default getCurrentDayForecast;
