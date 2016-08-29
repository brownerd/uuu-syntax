'use babel';

import path from 'path';
import pojo from './pojo';
import writeStyles from './write-to-stylesheet';
import randomComplement from './random-complement';

export default function() {
  atom.config.onDidChange('uuu-syntax', (value) => {

    let styles = pojo(value);

    if (styles.reset === false) {
      // Write all sass variables to a file
      writeStyles(path.join(__dirname, '../styles', 'uuu.less'), styles.settings, 'utf8');
      // Notify user that their styles have been made
      atom.notifications.addSuccess('Success', {detail: randomComplement(), dismissable: false});
    }
    else {
      // Unset all of this themes settings
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
