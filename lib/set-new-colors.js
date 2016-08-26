'use babel';

import path from 'path';
import pojo from './pojo';
import writeStyles from './write-to-stylesheet';

export default function() {
  atom.config.onDidChange('uuu-syntax', (value) => {

    let styles = pojo(value);

    if (!styles.reset) {
      // Write all sass variables to a file
      writeStyles(path.join(__dirname, '../styles', 'uuu.less'), styles.settings, 'utf8');
      // Notify user that their styles have been made
      atom.notifications.addSuccess('You have soo much style :)');
    }
    else {
      // overwrite sass variables with a comment
      writeStyles(path.join(__dirname, '../styles', 'uuu.less'), '// Reset!', 'utf8');
      // Unset all of this themes settings
      atom.config.unset(`uuu-syntax`);
      // Notify user that styles have been reset
      atom.notifications.addSuccess('Reset like a baws :)');
    }
    //console.dir(styles);
  });
}
