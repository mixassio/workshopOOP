import parserOpenWeatherMap from './openWeatherMap';
import parserMetaWeather from './metaWeather';

const parsers = {
  openweathermap: parserOpenWeatherMap,
  metaweather: parserMetaWeather,
  stylish: parserOpenWeatherMap,
};

const getParser = format => (data) => {
  const parser = parsers[format];
  return parser(data);
};

export { getParser, parsers };
