import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './WeatherPage.css'

const WeatherPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cdbaaeffb4c121409df8c527b4752dd`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);
  console.log(weather);
  return (
    <div className='weather'>
      <div className='inner-div'>
      <h1>Weather for {city}</h1>
      {weather && (
        <div>
          
          <p>Temperature: {weather.main.temp}</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>atmospheric pressure: {weather.main.pressure}</p>
          
        </div>
      )}
      </div>
    </div>
  );
};

export default WeatherPage;