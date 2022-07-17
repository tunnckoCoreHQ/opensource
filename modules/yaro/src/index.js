// SPDX-License-Identifier: MPL-2.0

/* eslint-disable node/prefer-global/process */

import yargsParser from 'yargs-parser';
import { Yaro } from './core.js';

const platformInfo = `${process.platform}-${process.arch} node-${process.version}`;

export const yaro = (name, settings) =>
  new Yaro(name, {
    ...settings,

    parser: yargsParser.detailed,
    argv: process.argv.slice(2),
    exit: process.exit,
    platformInfo,
  });

export { utils, Yaro } from './core.js';
