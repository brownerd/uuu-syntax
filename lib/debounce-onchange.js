'use babel';

import path from 'path';
import debounce from './debounce';
import writeStyles from './write-to-stylesheet';
import randomComplement from './random-complement';

export default debounce((styles) => {

  let data = styles.settings.map(item => `${item.sassvar}: ${item.value};`).join('\n');

  // Call writeStyles() after debouncing atom.config.onDidChange()
  writeStyles(path.join(__dirname, '..', 'styles', 'urawsm.less'), data, 'utf8').then( () => {

    // after write has finished, notify user that their styles have been made
    atom.notifications.addSuccess('Syntax Updated!', {detail: randomComplement(), dismissable: false});
  });
}, 2000);
