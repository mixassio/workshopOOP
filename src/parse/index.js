import parserOpenWeatherMap from './openWeatherMap';
import parserMetaWeather from './metaWeather';

const parsers = {
  openweathermap: parserOpenWeatherMap,
  metaweather: parserMetaWeather,
  stylish: parserOpenWeatherMap,
};

export default format => (data) => {
  const parser = parsers[format];
  return parser(data);
};

