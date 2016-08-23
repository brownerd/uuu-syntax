'use babel';

import packageConfig from './config-schema.json';

// This is your main singleton.
// The whole state of your package will be stored and managed here.
const uuusyntax = {
  config: packageConfig,
  
  activate (state) {
    // Activates and restores the previous session of your package.
  },
  deactivate () {
    // When the user or Atom itself kills a window, this method is called.
  },
  serialize () {
    // To save the current package's state, this method should return
    // an object containing all required data.
  }
};

export default uuusyntax;
