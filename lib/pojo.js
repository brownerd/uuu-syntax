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
      // {
      //   sassvar: "@keyword-color",
      //   value: value.newValue.keyword.color.toRGBAString(),
      // },
      // {
      //   sassvar: "@keyword-style",
      //   value: value.newValue.keyword.fontStyle,
      // },
      // {
      //   sassvar: "@keyword-weight",
      //   value: value.newValue.keyword.weight,
      // },
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
// Storage  - variables var let const function parameters class public private =>
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
// Storage modifier - const extends static
      {
        sassvar: "@storage-modifier-color",
        value: value.newValue.storageModifier.color.toRGBAString(),
      },
      {
        sassvar: "@storage-modifier-style",
        value: value.newValue.storageModifier.fontStyle,
      },
      {
        sassvar: "@storage-modifier-weight",
        value: value.newValue.storageModifier.weight,
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
// Quotation mark
      {
        sassvar: "@quotation-mark-color",
        value: value.newValue.quotationMark.color.toRGBAString(),
      },
      {
        sassvar: "@quotation-mark-weight",
        value: value.newValue.quotationMark.weight,
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
// Operator - + - / * == === !== >= <=
      {
        sassvar: "@operator-color",
        value: value.newValue.operator.color.toRGBAString(),
      },
      {
        sassvar: "@operator-style",
        value: value.newValue.operator.fontStyle,
      },
      {
        sassvar: "@operator-weight",
        value: value.newValue.operator.weight,
      },
// Number
      {
        sassvar: "@number-color",
        value: value.newValue.number.color.toRGBAString(),
      },
      {
        sassvar: "@number-style",
        value: value.newValue.number.fontStyle,
      },
      {
        sassvar: "@number-weight",
        value: value.newValue.number.weight,
      },
// Function name
      {
        sassvar: "@function-name-color",
        value: value.newValue.functionName.color.toRGBAString(),
      },
      {
        sassvar: "@function-name-style",
        value: value.newValue.functionName.fontStyle,
      },
      {
        sassvar: "@function-name-weight",
        value: value.newValue.functionName.weight,
      },
// Instance name
      {
        sassvar: "@instance-color",
        value: value.newValue.instance.color.toRGBAString(),
      },
      {
        sassvar: "@instance-style",
        value: value.newValue.instance.fontStyle,
      },
      {
        sassvar: "@instance-weight",
        value: value.newValue.instance.weight,
      },
// Regex
      {
        sassvar: "@regex-color",
        value: value.newValue.regex.color.toRGBAString(),
      },
      {
        sassvar: "@regex-style",
        value: value.newValue.regex.fontStyle,
      },
      {
        sassvar: "@regex-weight",
        value: value.newValue.regex.weight,
      },
// GIT line added, modified and removed
      {
        sassvar: "@git-gutter-line-added-color",
        value: value.newValue.gitGutter.lineAddedColor.toRGBAString(),
      },
      {
        sassvar: "@git-gutter-line-modified-color",
        value: value.newValue.gitGutter.lineModifiedColor.toRGBAString(),
      },
      {
        sassvar: "@git-gutter-line-removed-color",
        value: value.newValue.gitGutter.lineRemovedColor.toRGBAString(),
      },
    ]
  }
}
