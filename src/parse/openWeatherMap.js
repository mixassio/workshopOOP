import axios from 'axios';

export default async (city) => {
  const response = await axios(`http://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`);
  const { main, visibility, wind } = response.data;
  const { temp, pressure, humidity } = main;
  const { speed, deg } = wind;
  const result = {
    temp,
    pressure,
    humidity,
    visibility,
    windSpeed: speed,
    windDeg: deg,
  };
  return result;
};
