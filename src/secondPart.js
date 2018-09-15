import getParser from './parse';


export default (city, service) => {
  const parse = getParser(service);
  return parse(city);
};
