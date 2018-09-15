// @flow
import axios from 'axios';


export default async (ip, req = axios) => {
  const response = await req(`http://ip-api.com/json/${ip}`);
  const {
    city,
    country,
    lat,
    lon,
  } = response.data;
  const result = { city, country, lat, lon };
  return result;
};
