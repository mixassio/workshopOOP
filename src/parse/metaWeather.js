import axios from 'axios';

export default async (city) => {
  const responseId = await axios(`https://www.metaweather.com/api/location/search/?query=${city}`);
  const idLocation = responseId.data[0].woeid;
  const responseData = await axios(`https://www.metaweather.com/api/location/${idLocation}/`);
  const {
    the_temp: temp,
    air_pressure: pressure,
    humidity,
    visibility,
    wind_speed: windSpeed,
    wind_speed: windDeg,
  } = responseData.data.consolidated_weather[0];
  const result = {
    temp,
    pressure,
    humidity,
    visibility,
    windSpeed,
    windDeg,
  };
  return result;
};
