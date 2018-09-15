// @flow

import downloadInfo from '../src';

test('half', async () => {
  const trueAnswer = '{"city":"Moscow","country":"Russia","lat":55.7522,"lon":37.6156}';
  const objAnswer = await downloadInfo('91.77.226.130');
  expect(JSON.stringify(objAnswer)).toBe(trueAnswer);
});
