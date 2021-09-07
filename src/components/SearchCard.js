import React, {useState, useEffect} from 'react'
import ".."
import axios from "axios";

const SearchCard = () => {

    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState([])
    // console.log('weatherInfo :>> ', weatherInfo);

    const handleCity = (e) => setCity(e.target.value.toLowerCase())

    const searchCity = () => {
        let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.io)" 
        }
    
        let reqOptions = {
        url: `http://api.weatherapi.com/v1/forecast.json?key=73ed49046fd4425c884172718210709&q=${city}&days=3&aqi=no&alerts=no`,
        method: "GET",
        headers: headersList,
        }
    
        axios.request(reqOptions).then(function (response) {
        setWeatherInfo(response.data);
        })
    }


    return (
        <div className="search-card">
            <div className="input-card">
                <input type="text" name="input-field" id="input-field" placeholder="How is the weather in ...?" onChange={handleCity} />
                <button onClick={searchCity}>Search</button>
                <p>{weatherInfo?.location?.name}</p>
                <p>{weatherInfo?.location?.localtime.slice(11, 16)}</p>
            </div>

            <div className="result-card">
                <div className="icon" > <img src={weatherInfo?.current?.condition?.icon}  alt="icon" /> </div>

                <div className="weather-info">
                    <p id="temperature">{Math.round(weatherInfo?.current?.temp_c)}°</p>
                    <p id="description">{weatherInfo?.current?.condition?.text}</p>
                </div>

                <div className="location">
                    <p id="city">{weatherInfo?.current?.last_updated?.slice(8,10) + " / " + weatherInfo?.current?.last_updated?.slice(5, 7)}</p>
                </div>
            </div>


        </div>
    )
}

export default 