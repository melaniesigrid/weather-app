const getCurrentDayDetailedForecast = (currentWeather, dailyForecast) => [
  {
    name: 'max temp',
    value: dailyForecast.Temperature.Maximum.Value,
    unit: '°C',
  },
  {
    name: 'min temp',
    value: dailyForecast.Temperature.Minimum.Value,
    unit: '°C',
  },
];

export default getCurrentDayDetailedForecast;
