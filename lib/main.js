'use babel';

import fs from 'fs';
import updater from './set-new-colors.js';
import configSchema from './config-schema.json';
// import {CompositeDisposable} from 'atom';

// This is your main singleton.
// The whole state of your package will be stored and managed here.
export default {
  config: configSchema,

  activate (state) {
    // Activates and restores the previous session of your package.
    updater();
  },
  deactivate () {
    // When the user or Atom itself kills a window, this method is called.
  },
  serialize () {
    // To save the current package's state, this method should return
    // an object containing all required data.
  },

}
