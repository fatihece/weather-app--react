import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clear from "../assets/c.svg"
import heavyCloud from "../assets/hc.svg"
import heavyRain from "../assets/hr.svg"
import snow from "../assets/sn.svg"
import sleet from "../assets/sl.svg"
import lightRain from "../assets/lr.svg"
import hail from "../assets/h.svg"
import thunderStorm from "../assets/t.svg"
import showers from "../assets/s.svg"
import lightCloud from "../assets/lc.svg"

const London = () => {
  const [city, setCity] = useState("");
  const [cityInfo, setCityInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.metaweather.com/api/location/44418/')
      .then((res) => setCity(res.data));
    axios
      .get('https://www.metaweather.com/api/location/44418/')
      .then((res) => setCityInfo(res.data.consolidated_weather[0]));
  }, [city]);

  let time = city?.time?.slice(11, 16);
  let day = city?.time?.slice(8, 10);
  let month = city?.time?.slice(5, 7);

  let description = cityInfo?.weather_state_name?.toUpperCase();

  const icon = () => {               
    switch (description) {
        case "HEAVY CLOUD": return <img src={heavyCloud} alt="clouds" />
        case "SHOWERS" : return <img src={showers} alt="clouds" />
        case "HEAVY RAIN": return <img src={heavyRain} alt="heavy rain" />
        case "CLEAR": return <img src={clear} alt="sunny" />
        case "LIGHT CLOUD": return <img src={lightCloud} alt="light cloud" />
        case "LIGHT RAIN": return <img src={lightRain} alt="light rain" />
        case "SLEET": return <img src={sleet} alt="light rain" />
        case "HAIL": return <img src={hail} alt="light rain" />
        case "SNOW": return <img src={snow} alt="light rain" />
        case "THUNDERSTORM": return <img src={thunderStorm} alt="light rain" />
        default:
            break;       
    }
  }

  return (
    <div className="card">
      <div className="date-time">
        <p id="time">{time}</p>  
        <p id="date">{day + " / " + month}</p>
      </div>

      <div className="icon"> {icon()}   </div>

      <div className="weather-info">
        <p id="temperature">{Math.round(cityInfo?.the_temp)}°</p>
        <p id="description">{description}</p>
      </div>

      <div className="location">
        <p id="city">{city?.title?.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default London;