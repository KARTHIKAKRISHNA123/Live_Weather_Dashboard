import { useState } from 'react';
import searchIcon from './assets/search.png';
import snowIcon from './assets/snow.png';
import rainIcon from './assets/rain.png';
import cloudIcon from './assets/cloud.png';
import clearIcon from './assets/clear.png';
import drizzleIcon from './assets/drizzle.png';
import humidIcon from './assets/humidity.png';
import windIcon from './assets/wind.png';



import './App.css';

const WeatherDetails = ({icon, temp, city, country, lat, long, humidity, windSpeed}) => {
  return (
  <>
  <div className="image">
    <img src={icon} alt="Image" />

  </div>
  <div className="temp">56°C</div>
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
      <img src={humidIcon} alt="humidityIcon" />
      <div className="data">
        <div className="humidity-percent">
          85%
        </div>
        <div className="text">Humidity</div>
      </div>
    </div>
    <div className="element">
      <img src={windIcon} alt="windIcon" />
      <div className="data">
        <div className="wind-percent">
          70%
        </div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  </div>
  
  </>
  )
}

function App() {
  const [icon, setIcon] = useState(cloudIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('Chennai');
  const [country, setCountry] = useState('IN');

  const [lat, setLat] = useState(13.0827);
  const [long, setLong] = useState(80.2707);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className="cityInput" placeholder='Search City' />
          <div className="search-icon">
            <img src={searchIcon} alt="Search Icon" />
          </div>

        </div>
        <WeatherDetails  icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} humidity={humidity} windSpeed={windSpeed} />

      </div>

    </>
  )
}

export default App
