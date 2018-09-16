// @flow
import fs from 'fs';
import nock from 'nock';
import downloadInfo from '../src/firstPart';
import weather from '../src/secondPart';

nock.disableNetConnect();
describe('Test function', () => {
  it('ipGeo with iversion requirements', async () => {
    const response = () => ({
      status: 200,
      data: {
        as: 'AS8359 MTS PJSC',
        city: 'Moscow',
        country: 'Russia',
        countryCode: 'RU',
        isp: 'MTS PJSC',
        lat: 55.7522,
        lon: 37.6156,
        org: 'MTS Broadband',
        query: '91.77.226.130',
        region: 'MOW',
        regionName: 'Moscow',
        status: 'success',
        timezone: 'Europe/Moscow',
        zip: '129344',
      },
    });
    const trueAnswer = '{"city":"Moscow","country":"Russia","lat":55.7522,"lon":37.6156}';
    const objAnswer = await downloadInfo('91.77.226.130', response);
    expect(JSON.stringify(objAnswer)).toBe(trueAnswer);
  });

  const myResponse = fs.readFileSync('./__tests__/__fixtures__/responseOpenWeatherMap.json', 'utf8').toString();
  const returnTrue = fs.readFileSync('./__tests__/__fixtures__/returnTrue.json', 'utf8').toString();

  it('weather test openWeatherMap', async () => {
    const host = 'http://openweathermap.org';
    const status = 200;
    nock(host).get('/data/2.5/weather?q=Moscow&appid=b6907d289e10d714a6e88b30761fae22').reply(status, JSON.parse(myResponse));
    const response = await weather()('Moscow', 'openweathermap');
    expect(response).toEqual(JSON.parse(returnTrue));
  });
  it('add new service and check working', async () => {
    const response = await weather('newService', () => JSON.parse(returnTrue))('Moscow', 'newService');
    expect(response).toEqual(JSON.parse(returnTrue));
  });
});
