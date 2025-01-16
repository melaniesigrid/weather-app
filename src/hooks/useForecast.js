import { useState } from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'http://dataservice.accuweather.com/locations/v1';
const CURRENT_CONDITIONS_URL = 'http://dataservice.accuweather.com/currentconditions/v1';
const FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  // Fetch location key
  const getLocationKey = async (location) => {
    try {
      const { data } = await axios(`${BASE_URL}/cities/autocomplete`, {
        params: { apikey: API_KEY, q: location },
      });

      if (!data || data.length === 0) {
        setError('Location not found.');
        return null;
      }

      return data[0]?.Key;
    } catch (error) {
      setError('Something went wrong. Please try again.');
      return null;
    }
  };

  const getCurrentWeather = async (locationKey) => {
    try {
      const { data } = await axios(`${CURRENT_CONDITIONS_URL}/${locationKey}`, {
        params: { apikey: API_KEY },
      });

      if (!data || data.length === 0) {
        setError('Error fetching weather data.');
        return null;
      }
      return data[0];
    } catch (error) {
      setError('Something went wrong. Please try again.');
      return null;
    }
  };

  const getFiveDayForecast = async (locationKey) => {
    try {
      const { data } = await axios(`${FORECAST_URL}/${locationKey}`, {
        params: { apikey: API_KEY, metric: true },
      });

      if (!data || !data.DailyForecasts || data.DailyForecasts.length === 0) {
        setError('Error fetching 5-day forecast.');
        return null;
      }

      return data.DailyForecasts;
    } catch (error) {
      setError('Something went wrong. Please try again.');
      return null;
    }
  };

  const gatherForecastData = (currentWeather, dailyForecasts, location) => {
    if (!currentWeather || !dailyForecasts || dailyForecasts.length === 0) {
      setError('Data could not be loaded.');
      return;
    }

    const currentDay = getCurrentDayForecast(currentWeather, location);
    const currentDayDetails = getCurrentDayDetailedForecast(currentWeather, dailyForecasts[0]);
    const upcomingDays = getUpcomingDaysForecast(dailyForecasts);

    setForecast({ currentDay, currentDayDetails, upcomingDays });
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    try {
      const locationKey = await getLocationKey(location);
      if (!locationKey) throw new Error('Failed to get location key.');

      const currentWeather = await getCurrentWeather(locationKey);
      if (!currentWeather) throw new Error('Failed to get current weather.');

      const dailyForecasts = await getFiveDayForecast(locationKey);
      if (!dailyForecasts) throw new Error('Failed to get 5-day forecast.');

      gatherForecastData(currentWeather, dailyForecasts, location);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
