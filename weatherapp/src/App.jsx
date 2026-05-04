import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Oval } from 'react-loader-spinner'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });


  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });
      console.log("Started");
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'c9b63e8b2f857417e7a932a0b112a5b0';
      await axios.get(url, {
        params: {
          q: input,
          units: "metric",
          appid: api_key,
        },

      })
        .then((res) => {
          setWeather({ data: res.data, loading: false, error: false })
          console.log(weather.data,"Data");
        })
        .catch((error) => {
          setWeather({ ...weather,loading:false, data: {}, error: true });
          setInput('');
          console.log('error', error);
        });
    }
  }



  return (
    <>
      <div className='weather-box'>
        <h1 className='title'>Weather App</h1>

        <input type="text" placeholder='Enter City Name' name="query" value={input} onChange={(event) => setInput(event.target.value)} onKeyPress={search} />

        {
          weather.loading && (
            <div>
              <br />
              <br />
              <Oval type="Oval" color="black" height={100} width={100} />
            </div>
          )
        }

        {
          weather.error && (
            <div>
              <br />
              <br />
              <span className="error-message">
                <FontAwesomeIcon icon={faFrown} />
                <span style={{ fontSize: '20px' }}>City not found</span>
              </span>
            </div>
          )}

        {
          weather && weather.data && weather.data.main && (
            <div>
              <div className="city-name">
                <h2>{weather.data.name},<span>{weather.data.sys.country}</span></h2>
              </div>

              <div className="city-temp">
                <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="H" />

                <p className='temperature'>{weather.data.main.temp} <sup>o</sup>C</p>
              </div>

              {/* <div className="city-temp">
                
              </div> */}

              <div className="des-wind">
                <p>{weather.data.weather[0].description.toUpperCase()}</p>
                <p>{weather.data.wind.speed}m/s</p>
              </div>
            </div>
          )
        }

      </div>



    </>
  )
}

export default App
