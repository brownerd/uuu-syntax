'use babel';

import pojo from './pojo';
import debounceOnChange from './debounce-onchange';

// atom.config.onDidChange() needs to be debounced since it fires on
// every change to the config.

export default function() {

  atom.config.onDidChange('uuu-syntax', (value) => {

    let styles = pojo(value);

    if (styles.reset === false) {

      // Write all sass variables to a file after debounce
      debounceOnChange(styles);
    }
    else {
      // Unset all of this theme's settings
      // This will aso fire onDidChange and it will rewrite
      // the default settings to the uuu stylesheet
      atom.config.unset(`uuu-syntax`);

      // Notify user that styles have been reset
      atom.notifications.addSuccess('Success', {detail:'Back to the drawing board', dismissable: false});
    }
    // console.dir(styles);
    // console.dir(atom.config.get(`uuu-syntax`));
    // console.dir(atom.config)
  });

}
