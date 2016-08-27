'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
      {
        sassvar: "@editor-background",
        value: value.newValue.editor.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@editor-text-color",
        value: value.newValue.editor.textColor.toRGBAString(),
      },
      {
        sassvar: "@comment-text-color",
        value: value.newValue.comments.textColor.toRGBAString(),
      },
      {
        sassvar: "@comment-text-style",
        value: value.newValue.comments.fontStyle,
      },
      {
        sassvar: "@cursor-color",
        value: value.newValue.cursor.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@cursor-shadow",
        value: value.newValue.cursor.cursorShadow.toRGBAString(),
      },
      {
        sassvar: "@gutter-background",
        value: value.newValue.gutter.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@gutter-text-color",
        value: value.newValue.gutter.textColor.toRGBAString(),
      },
      {
        sassvar: "@linenos-selection",
        value: value.newValue.selectedLine.backgroundColor.toRGBAString(),
      },
    ]
  }
}
