'use babel';

var oldConfigs = [
  "editor.textColor",
  "editor.backgroundColor",
  "comments.textColor",
  "comments.fontStyle",
  "cursor.backgroundColor",
  "cursor.cursorShadow",
  "gutter.backgroundColor",
  "gutter.textColor",
  "selectedLine.backgroundColor"
];

export default function() {
  // oldConfigs.forEach((option) => {
  //   atom.config.unset(`uuu-syntax.${option}`);
  // });

  var currentConfig = atom.config.get("uuu-syntax");
  console.dir(currentConfig);
}

// atom.config.unset(`uuu-syntax`);
