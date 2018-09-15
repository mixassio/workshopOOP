import getParse from './parse';


export default (city, service) => {
  const parser = getParse(service);
  return parser(city);
};
