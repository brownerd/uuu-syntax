'use babel';

import fs from 'fs';
import updateStyles from './update-styles.js';
import configSchema from './config-schema.json';
//import {CompositeDisposable} from 'atom';


export default {

  // Make config available
  config: configSchema,

  clog: console.log('hello from outside default'),

  // updateStyles: updateStyles()
  activate () {
    updateStyles();
  }

}
