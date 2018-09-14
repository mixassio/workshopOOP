// @flow
import axios from 'axios';
import convert from 'xml-js';


export default async (ip) => {
  const response = await axios(`http://ipgeobase.ru:7020/geo?ip=${ip}`);
  const result = convert.xml2json(response.data, { compact: true, spaces: 4 });
  const objRes = JSON.parse(result)['ip-answer']['ip'];
  if (objRes.message) {
    return new Error('Not found');
  }
  const objNew = Object.keys(objRes).filter(el => objRes[el]['_text']);
  return objNew.reduce((acc, el) => ({ ...acc, [el]: objRes[el]['_text'] }), {});
};
