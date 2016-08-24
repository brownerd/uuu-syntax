'use babel';

export default function() {
  atom.config.onDidChange('uuu-syntax', (value) => {
    //
    // var config = `@editor-background: ${value.newValue.toRGBAString()};\n`;
    //
    //
    // fs.writeFile(`${__dirname}/../styles/uuu.less`, config, 'utf8', () => {
    //
    //   var themePack = atom.packages.getLoadedPackage('uuu-syntax');
    //
    //   if (themePack) {
    //       themePack.deactivate();
    //       setImmediate(() => themePack.activate());
    //   }
    // });
    //
    // atom.notifications.addSuccess(value.newValue.toRGBAString());
    // console.log(value.newValue.toRGBAString());
    console.log(value);
  });
}
//
// const syntaxSettings = {
//   "@main-text-color": "@charcoal",
//   "@comment-text-color":" @lead",
//   "@cursor-color": "@gold",
//   "@cursor-shadow": "@charcoal",
//   "@editor-background": "@graphite",
//   "@gutter-background": "@editor-background",
//   "@linenos-selection": "@slime",
// };
