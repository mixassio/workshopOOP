import { getParser, parsers } from './parse';


export default (nameNewService = null, newService = null) => (city, service) => {
  if (newService) {
    parsers[nameNewService] = newService;
  }
  const parse = getParser(service);
  return parse(city);
};
