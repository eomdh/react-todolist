import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

const WeatherContainer = styled.div`
  display: flex;
  width: 400px;
  height: 180px;
  background-color: #fff;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fab005;
  ${(props) => props.cold && css`
      background-color: #15aabf;
  `}
`

const Location = styled.div`
  color: white;
  border-radius: 0.5rem;
  font-size: 25px;
  font-weight: 500;
  padding-top: 40px;
  padding-left: 45px;
`;

const Temperature = styled.div`
  color: white;
  font-size: 40px;
  padding-top: 20px;
  padding-left: 45px;
`;

const WeatherDiv = styled.div`
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding-top: 40px;
  padding-left: 80px;
`;

const WeatherIcon = styled.div`
  margin-left: 60px;
`;

function Weather() {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e11c651b908ecdabffee91774b473c33";
  const [weather, setWeather] = useState("");
  const [cold, setCold] = useState(true);

  useEffect(() => {
    axios.get(url).then((responseData) => {
      const data = responseData.data;
      setWeather({
        id: data.weather[0].id,
        temperature: data.main.temp,
        main: data.weather[0].main,
        loading: false,
      });
      setCold(weather.temperature < 290 ? true : false);
    });
  }, []);

  const selectIcon = () => {
    const icon = weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    
    switch (icon) {
      case "0":
        return <TiWeatherSunny size="6rem" color="white" />;
      case "2":
        return <TiWeatherStormy size="6rem" color="white" />;
      case "3":
        return <TiWeatherShower size="6rem" color="white" />;
      case "5":
        return <TiWeatherDownpour size="6rem" color="white" />;
      case "6":
        return <TiWeatherSnow size="6rem" color="white" />;
      case "7":
        return <BsCloudFog size="6rem" color="white" />;
      case "8":
        return <TiWeatherCloudy size="6rem" color="white" />;
    }
  };

  return(
    <WeatherContainer cold={ cold }>
      <div>
        <Location>Seoul, Korea</Location>
        <Temperature>{ (weather.temperature - 273.15).toFixed(2) }℃</Temperature>
      </div>
      <div>
        <WeatherDiv>{ weather.main }</WeatherDiv>
        <WeatherIcon>{ selectIcon() }</WeatherIcon>
      </div>
    </WeatherContainer>
  )
}

export default Weather;