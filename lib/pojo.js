'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
// Editor
      {
        sassvar: "@editor-background",
        value: value.newValue.editor.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@editor-text-color",
        value: value.newValue.editor.textColor.toRGBAString(),
      },
// Comment
      {
        sassvar: "@comment-text-color",
        value: value.newValue.comments.textColor.toRGBAString(),
      },
      {
        sassvar: "@comment-text-style",
        value: value.newValue.comments.fontStyle,
      },
// Cursor
      {
        sassvar: "@cursor-color",
        value: value.newValue.cursor.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@cursor-shadow",
        value: value.newValue.cursor.cursorShadow.toRGBAString(),
      },
// Gutter
      {
        sassvar: "@gutter-background",
        value: value.newValue.gutter.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@gutter-text-color",
        value: value.newValue.gutter.textColor.toRGBAString(),
      },
// Folded code style
      {
        sassvar: "@folded-code-color",
        value: value.newValue.folded.codeColor.toRGBAString(),
      },
// Line numbers and selection style
      {
        sassvar: "@linenos-selection",
        value: value.newValue.selectedLine.backgroundColor.toRGBAString(),
      },
// Bracket matcher
      {
        sassvar: "@bracket-matcher-background",
        value: value.newValue.bracketMatcher.backgroundColor.toRGBAString(),
      },
// Indent line color
      {
        sassvar: "@indent-line-color",
        value: value.newValue.indentGuide.lineColor.toRGBAString(),
      },
// Separator
      {
        sassvar: "@separator-color",
        value: value.newValue.separator.color.toRGBAString(),
      },
      {
        sassvar: "@separator-weight",
        value: value.newValue.separator.weight,
      },
// Delimiter
      {
        sassvar: "@delimiter-color",
        value: value.newValue.delimiter.color.toRGBAString(),
      },
      {
        sassvar: "@delimiter-weight",
        value: value.newValue.delimiter.weight,
      },
// Terminator
      {
        sassvar: "@terminator-color",
        value: value.newValue.terminator.color.toRGBAString(),
      },
      {
        sassvar: "@terminator-weight",
        value: value.newValue.terminator.weight,
      },
// Keyword
      {
        sassvar: "@keyword-color",
        value: value.newValue.keyword.color.toRGBAString(),
      },
      {
        sassvar: "@keyword-style",
        value: value.newValue.keyword.fontStyle,
      },
      {
        sassvar: "@keyword-weight",
        value: value.newValue.keyword.weight,
      },
// Selector - CSS only
      {
        sassvar: "@selector-color",
        value: value.newValue.selector.color.toRGBAString(),
      },
      {
        sassvar: "@selector-style",
        value: value.newValue.selector.fontStyle,
      },
      {
        sassvar: "@selector-weight",
        value: value.newValue.selector.weight,
      },
// Property name - CSS only
      {
        sassvar: "@property-name-color",
        value: value.newValue.propertyName.color.toRGBAString(),
      },
      {
        sassvar: "@property-name-style",
        value: value.newValue.propertyName.fontStyle,
      },
      {
        sassvar: "@property-name-weight",
        value: value.newValue.propertyName.weight,
      },
// Property value - CSS only
      {
        sassvar: "@property-value-color",
        value: value.newValue.propertyValue.color.toRGBAString(),
      },
      {
        sassvar: "@property-value-style",
        value: value.newValue.propertyValue.fontStyle,
      },
      {
        sassvar: "@property-value-weight",
        value: value.newValue.propertyValue.weight,
      },
// Unit - CSS only
      {
        sassvar: "@unit-color",
        value: value.newValue.unit.color.toRGBAString(),
      },
      {
        sassvar: "@unit-style",
        value: value.newValue.unit.fontStyle,
      },
      {
        sassvar: "@unit-weight",
        value: value.newValue.unit.weight,
      },
// Pseudo selectors  - CSS only
      {
        sassvar: "@pseudo-color",
        value: value.newValue.pseudo.color.toRGBAString(),
      },
      {
        sassvar: "@pseudo-style",
        value: value.newValue.pseudo.fontStyle,
      },
      {
        sassvar: "@pseudo-weight",
        value: value.newValue.pseudo.weight,
      },

    ]
  }
}
