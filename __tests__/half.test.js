// @flow

import half from '../src';

test('half', async () => {
  const response = half('91.77.226.130');
  expect(response.status).toBe('200');
});
