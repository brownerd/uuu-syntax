'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default (value) => {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
// Editor
      {
        sassvar: "@editor-backgroundcolor",
        value: value.newValue.editor.backgroundcolor.toRGBAString(),
      },
      // {
      //   sassvar: "@editor-style",
      //   value: value.newValue.editor.style,
      // },
      {
        sassvar: "@editor-color",
        value: value.newValue.editor.color.toRGBAString(),
      },
// Gutter
      // {
      //   sassvar: "@gutter-backgroundcolor",
      //   value: value.newValue.gutter.backgroundcolor.toRGBAString(),
      // },

      // I will need this if I decide to turn Gutter BG back on
      // "backgroundcolor": {
      //   "order": 1,
      //   "title": "Set background color",
      //   "description": "**Selects**: Gutter and line numbers",
      //   "type": "color",
      //   "default": "rgba(179, 179, 179, 1)"
      // },
      {
        sassvar: "@gutter-color",
        value: value.newValue.gutter.color.toRGBAString(),
      },
      {
        sassvar: "@gutter-value",
        value: value.newValue.gutter.value,
      },
      {
        sassvar: "@gutter-punk",
        value: value.newValue.gutter.punk,
      },
// Selected line and line numbers style
      {
        sassvar: "@selectedline-backgroundcolor",
        value: value.newValue.selectedline.backgroundcolor.toRGBAString(),
      },
      {
        sassvar: "@selectedline-backgroundguttercolor",
        value: value.newValue.selectedline.backgroundguttercolor.toRGBAString(),
      },
// Cursor
      {
        sassvar: "@cursor-style",
        value: value.newValue.cursor.style,
      },
      {
        sassvar: "@cursor-color",
        value: value.newValue.cursor.color.toRGBAString(),
      },
      {
        sassvar: "@cursor-shadow",
        value: value.newValue.cursor.shadow.toRGBAString(),
      },
// Indent line color
      {
        sassvar: "@indentguide-linecolor",
        value: value.newValue.indentguide.linecolor.toRGBAString(),
      },
      {
        sassvar: "@indentguide-value",
        value: value.newValue.indentguide.value,
      },
// Folded code style
      {
        sassvar: "@folded-codecolor",
        value: value.newValue.folded.codecolor.toRGBAString(),
      },
// Bracket matcher
      {
        sassvar: "@bracketmatcher-backgroundcolor",
        value: value.newValue.bracketmatcher.backgroundcolor.toRGBAString(),
      },
// Comment
      {
        sassvar: "@comment-color",
        value: value.newValue.comment.color.toRGBAString(),
      },
      {
        sassvar: "@comment-fontstyle",
        value: value.newValue.comment.fontstyle,
      },
      {
        sassvar: "@comment-value",
        value: value.newValue.comment.value,
      },
// Selector - CSS only
      {
        sassvar: "@selector-color",
        value: value.newValue.selector.color.toRGBAString(),
      },
      {
        sassvar: "@selector-fontstyle",
        value: value.newValue.selector.fontstyle,
      },
// Pseudo selectors  - CSS only
      {
        sassvar: "@pseudo-color",
        value: value.newValue.pseudo.color.toRGBAString(),
      },
      {
        sassvar: "@pseudo-fontstyle",
        value: value.newValue.pseudo.fontstyle,
      },
      {
        sassvar: "@pseudo-weight",
        value: value.newValue.pseudo.weight,
      },
      {
        sassvar: "@selector-weight",
        value: value.newValue.selector.weight,
      },
// Property name - CSS only
      {
        sassvar: "@propertyname-color",
        value: value.newValue.propertyname.color.toRGBAString(),
      },
      {
        sassvar: "@propertyname-fontstyle",
        value: value.newValue.propertyname.fontstyle,
      },
      {
        sassvar: "@propertyname-weight",
        value: value.newValue.propertyname.weight,
      },
// Property value - CSS only
      {
        sassvar: "@propertyvalue-color",
        value: value.newValue.propertyvalue.color.toRGBAString(),
      },
      {
        sassvar: "@propertyvalue-fontstyle",
        value: value.newValue.propertyvalue.fontstyle,
      },
      {
        sassvar: "@propertyvalue-weight",
        value: value.newValue.propertyvalue.weight,
      },
// Unit - CSS only
      {
        sassvar: "@unit-color",
        value: value.newValue.unit.color.toRGBAString(),
      },
      {
        sassvar: "@unit-fontstyle",
        value: value.newValue.unit.fontstyle,
      },
      {
        sassvar: "@unit-weight",
        value: value.newValue.unit.weight,
      },
// Number
      {
        sassvar: "@number-color",
        value: value.newValue.number.color.toRGBAString(),
      },
      {
        sassvar: "@number-fontstyle",
        value: value.newValue.number.fontstyle,
      },
      {
        sassvar: "@number-weight",
        value: value.newValue.number.weight,
      },
// Punctuation  . , : " <> {} () [] ;"
      {
        sassvar: "@punctuation-color",
        value: value.newValue.punctuation.color.toRGBAString(),
      },
      {
        sassvar: "@punctuation-weight",
        value: value.newValue.punctuation.weight,
      },
// Doctype name  - HTML only
      {
        sassvar: "@doctype-color",
        value: value.newValue.doctype.color.toRGBAString(),
      },
      {
        sassvar: "@doctype-fontstyle",
        value: value.newValue.doctype.fontstyle,
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
        sassvar: "@tag-fontstyle",
        value: value.newValue.tag.fontstyle,
      },
      {
        sassvar: "@tag-weight",
        value: value.newValue.tag.weight,
      },
// Attribute name  - HTML only
      {
        sassvar: "@attributename-color",
        value: value.newValue.attributename.color.toRGBAString(),
      },
      {
        sassvar: "@attributename-fontstyle",
        value: value.newValue.attributename.fontstyle,
      },
      {
        sassvar: "@attributename-weight",
        value: value.newValue.attributename.weight,
      },
// Quotation mark
      {
        sassvar: "@quotationmark-color",
        value: value.newValue.quotationmark.color.toRGBAString(),
      },
      {
        sassvar: "@quotationmark-weight",
        value: value.newValue.quotationmark.weight,
      },
// Strings - anything between quotes
      {
        sassvar: "@string-color",
        value: value.newValue.string.color.toRGBAString(),
      },
      {
        sassvar: "@string-fontstyle",
        value: value.newValue.string.fontstyle,
      },
      {
        sassvar: "@string-weight",
        value: value.newValue.string.weight,
      },
// Storage  - variables var let const function parameters class public private =>
      {
        sassvar: "@storage-color",
        value: value.newValue.storage.color.toRGBAString(),
      },
      {
        sassvar: "@storage-fontstyle",
        value: value.newValue.storage.fontstyle,
      },
      {
        sassvar: "@storage-weight",
        value: value.newValue.storage.weight,
      },
// Storage modifier - const extends static
      {
        sassvar: "@storagemodifier-color",
        value: value.newValue.storagemodifier.color.toRGBAString(),
      },
      {
        sassvar: "@storagemodifier-fontstyle",
        value: value.newValue.storagemodifier.fontstyle,
      },
      {
        sassvar: "@storagemodifier-weight",
        value: value.newValue.storagemodifier.weight,
      },
// Operator - + - / * == === !== >= <=
      {
        sassvar: "@operator-color",
        value: value.newValue.operator.color.toRGBAString(),
      },
      {
        sassvar: "@operator-weight",
        value: value.newValue.operator.weight,
      },
// Function name
      {
        sassvar: "@functionname-color",
        value: value.newValue.functionname.color.toRGBAString(),
      },
      {
        sassvar: "@functionname-fontstyle",
        value: value.newValue.functionname.fontstyle,
      },
      {
        sassvar: "@functionname-weight",
        value: value.newValue.functionname.weight,
      },
// Console.log
      {
        sassvar: "@consolelog-color",
        value: value.newValue.consolelog.color.toRGBAString(),
      },
      {
        sassvar: "@consolelog-fontstyle",
        value: value.newValue.consolelog.fontstyle,
      },
      {
        sassvar: "@consolelog-weight",
        value: value.newValue.consolelog.weight,
      },
// Class  - Programming only
      {
        sassvar: "@class-color",
        value: value.newValue.class.color.toRGBAString(),
      },
      {
        sassvar: "@class-fontstyle",
        value: value.newValue.class.fontstyle,
      },
      {
        sassvar: "@class-weight",
        value: value.newValue.class.weight,
      },
// Instance name
      {
        sassvar: "@instance-color",
        value: value.newValue.instance.color.toRGBAString(),
      },
      {
        sassvar: "@instance-fontstyle",
        value: value.newValue.instance.fontstyle,
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
        sassvar: "@regex-fontstyle",
        value: value.newValue.regex.fontstyle,
      },
      {
        sassvar: "@regex-weight",
        value: value.newValue.regex.weight,
      },
// Control  - Programming only
      {
        sassvar: "@control-color",
        value: value.newValue.control.color.toRGBAString(),
      },
      {
        sassvar: "@control-fontstyle",
        value: value.newValue.control.fontstyle,
      },
      {
        sassvar: "@control-weight",
        value: value.newValue.control.weight,
      },
// Constant
      {
        sassvar: "@constant-color",
        value: value.newValue.constant.color.toRGBAString(),
      },
      {
        sassvar: "@constant-weight",
        value: value.newValue.constant.weight,
      },
// Boolean
      {
        sassvar: "@boolean-color",
        value: value.newValue.boolean.color.toRGBAString(),
      },
      {
        sassvar: "@boolean-fontstyle",
        value: value.newValue.boolean.fontstyle,
      },
      {
        sassvar: "@boolean-weight",
        value: value.newValue.boolean.weight,
      },
// Module
      {
        sassvar: "@module-color",
        value: value.newValue.module.color.toRGBAString(),
      },
      {
        sassvar: "@module-fontstyle",
        value: value.newValue.module.fontstyle,
      },
      {
        sassvar: "@module-weight",
        value: value.newValue.module.weight,
      },
// Namespace
      {
        sassvar: "@namespace-color",
        value: value.newValue.namespace.color.toRGBAString(),
      },
      {
        sassvar: "@namespace-fontstyle",
        value: value.newValue.namespace.fontstyle,
      },
      {
        sassvar: "@namespace-weight",
        value: value.newValue.namespace.weight,
      },
// Type
      {
        sassvar: "@type-color",
        value: value.newValue.type.color.toRGBAString(),
      },
      {
        sassvar: "@type-fontstyle",
        value: value.newValue.type.fontstyle,
      },
      {
        sassvar: "@type-weight",
        value: value.newValue.type.weight,
      },
// Identifier
      {
        sassvar: "@identifier-color",
        value: value.newValue.identifier.color.toRGBAString(),
      },
      {
        sassvar: "@identifier-fontstyle",
        value: value.newValue.identifier.fontstyle,
      },
      {
        sassvar: "@identifier-weight",
        value: value.newValue.identifier.weight,
      },
// GIT line added, modified and removed
      {
        sassvar: "@gitgutter-lineaddedcolor",
        value: value.newValue.gitgutter.lineaddedcolor.toRGBAString(),
      },
      {
        sassvar: "@gitgutter-linemodifiedcolor",
        value: value.newValue.gitgutter.linemodifiedcolor.toRGBAString(),
      },
      {
        sassvar: "@gitgutter-lineremovedcolor",
        value: value.newValue.gitgutter.lineremovedcolor.toRGBAString(),
      },
    ]
  }
}
