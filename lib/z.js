@editor-background: rgba(214, 214, 214, 1);
@main-text-color: rgba(51, 51, 51, 1);
@comment-text-color: rgba(153, 153, 153, 1);
@comment-text-style: normal;
@cursor-color: rgba(255, 213, 0, 1);
@cursor-shadow: rgba(51, 51, 51, 1);
@gutter-background: rgba(204, 204, 204, 1);
@gutter-text-color: rgba(51, 51, 51, 1);
@gutter-background: rgba(0, 255, 102, 1);
@linenos-selection: rgba(0, 255, 102, 1);






let  pojo = (value) => {
  return [
    {
      sassvar: "@editor-background"
      value: value.newValue.editor.backgroundColor.toRGBAString(),
    },
    {
      sassvar: "@main-text-color"
      value: value.newValue.editor.textColor.toRGBAString(),
    },
    {
      sassvar: "@comment-text-color"
      value: value.newValue.comments.textColor.toRGBAString(),
    },
    {
      sassvar: "@comment-text-style"
      value: value.newValue.comments.fontStyle,
    },
    {
      sassvar: "@cursor-color"
      value: value.newValue.cursor.backgroundColor.toRGBAString(),
    },
    {
      sassvar: "@cursor-shadow"
      value: value.newValue.cursor.cursorShadow.toRGBAString(),
    },
    {
      sassvar: "@gutter-background"
      value: value.newValue.gutter.backgroundColor.toRGBAString(),
    },
    {
      sassvar: "@gutter-text-color"
      value: value.newValue.gutter.textColor.toRGBAString(),
    },
    {
      sassvar: "@gutter-background"
      value: value.newValue.selectedLine.backgroundColor.toRGBAString(),
    },
    {
      sassvar: "@linenos-selection"
      value: value.newValue.selectedLine.backgroundColor.toRGBAString(),
    }
  ]
}


{
  newValue: {
    "editor": {
      "backgroundColor": {
        "red": 0,
        "green": 253,
        "blue": 255,
        "alpha": 1
      },
      "textColor": {
        "red": 51,
        "green": 51,
        "blue": 51,
        "alpha": 1
      }
    },
    "comments": {
      "textColor": {
        "red": 153,
        "green": 153,
        "blue": 153,
        "alpha": 1
      },
      "fontStyle": "normal"
    },
    "cursor": {
      "backgroundColor": {
        "red": 255,
        "green": 213,
        "blue": 0,
        "alpha": 1
      },
      "cursorShadow": {
        "red": 51,
        "green": 51,
        "blue": 51,
        "alpha": 1
      }
    },
    "gutter": {
      "backgroundColor": {
        "red": 204,
        "green": 204,
        "blue": 204,
        "alpha": 1
      },
      "textColor": {
        "red": 51,
        "green": 51,
        "blue": 51,
        "alpha": 1
      }
    },
    "selectedLine": {
      "backgroundColor": {
        "red": 0,
        "green": 255,
        "blue": 102,
        "alpha": 1
      }
    }
  }
}
