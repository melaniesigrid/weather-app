const getFontAwesomeIcon = (weatherText, precipitationType) => {
  const text = weatherText ? weatherText.toLowerCase() : '';
  const precipitation = precipitationType ? precipitationType.toLowerCase() : '';
  const weatherIcons = {
    sunny: 'fas fa-sun',
    'mostly sunny': 'fas fa-sun',
    'partly sunny': 'fas fa-cloud-sun',
    'intermittent clouds': 'fas fa-cloud-sun',
    'hazy sunshine': 'fas fa-smog',
    'mostly cloudy': 'fas fa-cloud',
    cloudy: 'fas fa-cloud',
    'dreary (overcast)': 'fas fa-smog',
    fog: 'fas fa-smog',
    showers: 'fas fa-cloud-showers-heavy',
    thunderstorms: 'fas fa-bolt',
    rain: 'fas fa-cloud-rain',
    snow: 'fas fa-snowflake',
    ice: 'fas fa-icicles',
    hot: 'fas fa-temperature-high',
    cold: 'fas fa-temperature-low',
    windy: 'fas fa-wind',
  };

  const precipitationIcons = {
    rain: 'fas fa-cloud-rain',
    snow: 'fas fa-snowflake',
    ice: 'fas fa-icicles',
    mixed: 'fas fa-cloud-showers-heavy',
  };

  return precipitationIcons[precipitation] || weatherIcons[text] || 'fas fa-cloud';
};

export default getFontAwesomeIcon;
