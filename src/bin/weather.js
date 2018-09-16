#!/usr/bin/env node

import program from 'commander';
import { Weather } from '..';

program
  .description('Download site from url to file')
  .version('0.0.1')
  .arguments('<city>')
  .option('-s, --service <name>', 'name servise', 'openweathermap')
  .action((city) => {
    const weather = new Weather();
    weather.getWeather(city, program.service).then((data) => {
      console.log(data);
    });
  })
  .parse(process.argv);
