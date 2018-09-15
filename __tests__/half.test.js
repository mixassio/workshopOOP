// @flow

import downloadInfo from '../src';

test('half', async () => {
  const response = () => {
    return {
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
    };
  };
  const trueAnswer = '{"city":"Moscow","country":"Russia","lat":55.7522,"lon":37.6156}';
  const objAnswer = await downloadInfo('91.77.226.130', response);
  expect(JSON.stringify(objAnswer)).toBe(trueAnswer);
});
