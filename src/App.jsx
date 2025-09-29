import { useState, useEffect } from 'react';
import searchIcon from './assets/search.png';
import snowIcon from './assets/snow.png';
import rainIcon from './assets/rain.png';
import cloudIcon from './assets/cloud.png';
import clearIcon from './assets/clear.png';
import drizzleIcon from './assets/drizzle.png';
import humidIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';

import PropTypes from 'prop-types';



import './App.css';

const WeatherDetails = ({icon, temp, city, country, lat, long, humidity, windSpeed}) => {
  return (
  <>
  <div className="image">
    <img src={icon}  alt="Weather Icon"/>

  </div>
  <div className="temp">{temp}°C</div>
  <div className="location">{city}</div>
  <div className="country">{country}</div>
  <div className="cord">
    <div>
      <span className="lat">Latitude</span>
    <span>{lat}</span>
    </div>
    <div>
    <span className="long">Longitude</span>
    <span>{long}</span>
 
    </div>
    
    
  </div>
  <div className="data-container">
    <div className="element">
      <img src={humidIcon}  alt="humidityIcon" className="icon"/>
      <div className="data">
        <div className="humidity-percent">
          {humidity}%
        </div>
        <div className="text">Humidity</div>
      </div>
    </div>
    <div className="element">
      <img src={windIcon} alt="windIcon" className="icon" />
      <div className="data">
        <div className="wind-percent">
          {windSpeed} m/s
        </div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  </div>
  
  </>
  )
}

WeatherDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
}



function App() {
  const [icon, setIcon] = useState(cloudIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [lat, setLat] = useState(13.0827);
  const [long, setLong] = useState(80.2707);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  let api_key = import.meta.env.VITE_API_KEY;
  const [text, setText] = useState("Chennai");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
};


  const search = async() => {
    setLoading(true);
  

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

  try{
    let res = await fetch(url);
    let data = await res.json();
    
    
    //console.log(data);
    if(data.cod === "404"){
      console.error("City not found");

      setCityNotFound(true);
      setLoading(false);
      return;
    }

    setHumidity(data.main.humidity);
    setWindSpeed(data.wind.speed);
    setTemp(Math.floor(data.main.temp));
    setCity(data.name);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLong(data.coord.lon);
    
    const weatherIconCode = data.weather[0].icon;
    setIcon(weatherIconMap[weatherIconCode] || clearIcon);
    setCityNotFound(false);

    

  } catch(error){
    console.error("Error fetching weather data:", error);
    setError("Error fetching weather data. Please try again later.");
  } finally {
    setLoading(false);

  }

}

const handleCity = (e) => {
  setText(e.target.value);
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    search();
  }
};

useEffect(function() {
  search();
}, [])
  

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className="cityInput" placeholder='Search City' value={text} onChange={handleCity} onKeyDown={handleKeyDown} />
          <div className="search-icon" onClick={search}>
            <img src={searchIcon} alt="Search Icon" />
          </div>

        </div>
        {!loading && !cityNotFound && <WeatherDetails  icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} humidity={humidity} windSpeed={windSpeed} />}
{loading && <div className="loading-message">
        Loading...
      </div>
}
      {error && <div className="error-message">{error}</div>}
      {cityNotFound && <div className="city-not-found">City Not found</div>}
      </div>

      

    </>
  )
}

export default App;
