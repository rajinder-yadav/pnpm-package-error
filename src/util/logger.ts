'use strict';
import {createLogger} from 'bunyan';

/**
 * Bunyan logger configuration.
 * Ref: https://github.com/trentm/node-bunyan?tab=readme-ov-file#introduction
 * name : Name of the logger 'server'
 * level: Logging level 'info'
 * path : Location to write the log.
 */
const log = createLogger({
  name: 'server',
  streams: [
    {
      level: 'info',
      path: './logs/server.log',
    },
  ],
});

export default log;
