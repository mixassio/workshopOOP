// @flow
import axios from 'axios';


export default async (ip) => {
  const response = await axios(`http://ip-api.com/json/${ip}`);
  const {
    city,
    country,
    lat,
    lon,
  } = response.data;
  const result = { city, country, lat, lon };
  return JSON.stringify(result);
};
