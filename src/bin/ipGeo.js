#!/usr/bin/env node

import program from 'commander';
import { downloadGeo } from '..';

program
  .description('Download site from url to file')
  .version('0.0.1')
  .arguments('<ip>')
  .action((ip) => {
    downloadGeo(ip).then((data) => {
      console.log(data);
    });
  })
  .parse(process.argv);
