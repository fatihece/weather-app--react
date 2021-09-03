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
    const changeBGColor = document.getElementsByClassName("london")[0];
        switch (description) {
          case "HEAVY CLOUD": return (
            changeBGColor.style.backgroundColor = "#ccc",
            <img src={heavyCloud} alt="cloudy" />
          )
          case "SHOWERS": return (
            changeBGColor.style.backgroundColor = "lightblue",
            <img src={showers} alt="cloudy"/>
          )
          case "HEAVY RAIN": return (
            changeBGColor.style.backgroundColor = "#195Fa5",
            <img src={heavyRain} alt="heavy rain" />
          )
          case "CLEAR": return (
            changeBGColor.style.backgroundColor = "#EED46D",
            <img src={clear} alt="sunny" />
          ) 
          case "LIGHT CLOUD": return (
            changeBGColor.style.backgroundColor = "#93A5BD",
            <img src={lightCloud} alt="light cloud" />
          ) 
          case "LIGHT RAIN": return (
            changeBGColor.style.backgroundColor = "#3498db",
            <img src={lightRain} alt="light rain" />
          )
          case "SLEET": return (
            changeBGColor.style.backgroundColor = "#ecf0f1", 
            <img src={sleet} alt="light rain" />
          )
          case "HAIL": return (
            changeBGColor.style.backgroundColor = "#2c3e50", 
            <img src={hail} alt="light rain" />
          )
          case "SNOW": return (
            changeBGColor.style.backgroundColor = "#70a1ff", 
            <img src={snow} alt="light rain" />
          ) 
          case "THUNDERSTORM": return (
            changeBGColor.style.backgroundColor = "#1B1464e",
            <img src={thunderStorm} alt="light rain" />
          )
          default:
              break;  
          
        }
    }

  return (
    <div className="card london">
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