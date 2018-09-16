import serviceOpenWeatherMap from './parse/openWeatherMap';
import serviceMetaWeather from './parse/metaWeather';

const services = {
  openweathermap: serviceOpenWeatherMap,
  metaweather: serviceMetaWeather,
  stylish: serviceOpenWeatherMap,
};

/*
[{name: nameFunc, func: bodyFunc}, ...]
*/

export default class Weather {
  constructor(listNewServises) {
    this.services = (listNewServises) ?
      listNewServises.reduce((acc, { name, func }) => ({ ...acc, [name]: func }), { ...services }) :
      services;
  }
  getWeather(city, NameService) {
    const service = this.services[NameService];
    return service(city);
  }
}

