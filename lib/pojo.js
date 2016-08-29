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
// Punctuation  . , : " <> {} () [] ;"
      {
        sassvar: "@punctuation-color",
        value: value.newValue.punctuation.color.toRGBAString(),
      },
      {
        sassvar: "@punctuation-style",
        value: value.newValue.punctuation.fontStyle,
      },
      {
        sassvar: "@punctuation-weight",
        value: value.newValue.punctuation.weight,
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
// Doctype name  - HTML only
      {
        sassvar: "@doctype-color",
        value: value.newValue.doctype.color.toRGBAString(),
      },
      {
        sassvar: "@doctype-style",
        value: value.newValue.doctype.fontStyle,
      },
      {
        sassvar: "@doctype-weight",
        value: value.newValue.doctype.weight,
      },
// Tag name  - HTML only
      {
        sassvar: "@tag-color",
        value: value.newValue.tag.color.toRGBAString(),
      },
      {
        sassvar: "@tag-style",
        value: value.newValue.tag.fontStyle,
      },
      {
        sassvar: "@tag-weight",
        value: value.newValue.tag.weight,
      },
// Attribute name  - HTML only
      {
        sassvar: "@attribute-name-color",
        value: value.newValue.attributeName.color.toRGBAString(),
      },
      {
        sassvar: "@attribute-name-style",
        value: value.newValue.attributeName.fontStyle,
      },
      {
        sassvar: "@attribute-name-weight",
        value: value.newValue.attributeName.weight,
      },

// Class  - Programming only
      {
        sassvar: "@class-color",
        value: value.newValue.class.color.toRGBAString(),
      },
      {
        sassvar: "@class-style",
        value: value.newValue.class.fontStyle,
      },
      {
        sassvar: "@class-weight",
        value: value.newValue.class.weight,
      },
// Storage  - Programming only
      {
        sassvar: "@storage-color",
        value: value.newValue.storage.color.toRGBAString(),
      },
      {
        sassvar: "@storage-style",
        value: value.newValue.storage.fontStyle,
      },
      {
        sassvar: "@storage-weight",
        value: value.newValue.storage.weight,
      },
// Control  - Programming only
      {
        sassvar: "@control-color",
        value: value.newValue.control.color.toRGBAString(),
      },
      {
        sassvar: "@control-style",
        value: value.newValue.control.fontStyle,
      },
      {
        sassvar: "@control-weight",
        value: value.newValue.control.weight,
      },
// Strings - anything between quotes
      {
        sassvar: "@string-color",
        value: value.newValue.string.color.toRGBAString(),
      },
      {
        sassvar: "@string-style",
        value: value.newValue.string.fontStyle,
      },
      {
        sassvar: "@string-weight",
        value: value.newValue.string.weight,
      },
    ]
  }
}
