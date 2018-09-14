#!/usr/bin/env node

import program from 'commander';
import downloadInfo from '..';

program
  .description('Download site from url to file')
  .version('0.0.1')
  .arguments('<ip>')
  .action((ip) => {
    downloadInfo(ip).then((data) => {
      console.log(data);
    });
  })
  .parse(process.argv);
