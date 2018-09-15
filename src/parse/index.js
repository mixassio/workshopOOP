import parserOpenWeatherMap from './openWeatherMap';

const parsers = {
  openweathermap: parserOpenWeatherMap,
  stylish: parserOpenWeatherMap,
};

export default format => (data) => {
  const parser = parsers[format];
  return parser(data);
};

