# UUU-syntax theme

This is a syntax for UUU.

UUU can easily change the color, font-style and font-weight of nearly every piece of syntax. So, make a syntax UUUr way.




## Usage
- Install [UUU-Syntax] and activate it
- Click on the gear icon to access settings for UUU-Syntax
- Style away!


**PROtip**
1. Use "dev mode" to see updates as you make them. Open your terminal navigate to your current working directory and enter `atom --dev .` Using the [Terminal Plus]() package it the fastest solution for me, but use whatever you like.
1. Open files for all the languages that you want to style. You don't need to style every language. This is UUUr syntax!
1. Just start at the top of the settings and work your way down. Make one change, and then check it out.


**Issues**
If your style doesn't show, or it looks like all the styles reverted to the default, then just "reload" the window. You can do this in one of three ways:

- Goto View > Developer > Reload Window
- Or, press `ctrl + alt + cmd + L`
- Or open the command palette `shift+cmd+P`, type `reload` and press enter


* You will find that this is SUPER EASY and FAST todo. At some point you will want to export, import and save your cool, clever and quickly made syntaxes. Look below for extra add-ons.






## Extras! UUU- UI
If you want to edit UUUr UI also, then install [UUU-UI]() and enjoy the same freedom to edit UUUr UI also.

## Extras! Import and Export Syntax and UI
If you want to export and import your Syntaxes and UIs, then install [UUU]().

![A screenshot of your theme](https://f.cloud.github.com/assets/69169/2289498/4c3cb0ec-a009-11e3-8dbd-077ee11741e5.gif)





## Notes:
UUU-Syntax, lets you modify just about everything that it can. However, if you are an OCD type like me, then you might find that some styles modify some things that they should/shouldn't. Control at that level really becomes language specific. When a language/Grammar is mapped in Atom, it follows the same conventions used in TextMate. Read this:  [12 Language Grammars](http://manual.macromates.com/en/language_grammars.html#naming_conventions). The take away, is that there are many ways to mark up a Grammar, and these decisions are made differently between languages. Thus, there is an inconsistency in the use of available classes in Atom to style. Furthermore, not every Grammar marks up all of its pieces. Sometimes a grammar might lump a bunch of pieces into one identifier.

But so what! You want to style the syntax for the languages that you use! You don't need to style EVERY FUNKING LANGUAGE that exists right?! So go styles what you use!

Overall, I can live with what UUU-Syntax covers. If there is a special case that you need, then let me know. I can't promise that I can make an update, but I will look at the ticket and respond.













### Syntax styles

#### Hot mess

```less
@editor-backgroundcolor: rgba(66, 66, 66, 1);
@editor-color: rgba(255, 255, 255, 1);
@comment-color: rgba(146, 144, 0, 1);
@comment-fontstyle: italic;
@cursor-style: pacman;
@cursor-color: rgba(255, 213, 0, 1);
@cursor-shadow: rgba(51, 51, 51, 1);
@gutter-background: rgba(148, 82, 0, 1);
@gutter-color: rgba(255, 212, 121, 1);
@folded-codecolor: rgba(255, 0, 255, 1);
@linenos-selection: rgba(155, 115, 191, 1);
@bracketmatcher-background: rgba(255, 251, 0, 1);
@indentguide-linecolor: rgba(255, 251, 0, 1);
@punctuation-color: rgba(0, 84, 147, 1);
@punctuation-weight: bold;
@selector-color: rgba(148, 33, 147, 1);
@selector-fontstyle: normal;
@selector-weight: bold;
@propertyname-color: rgba(148, 55, 255, 1);
@propertyname-fontstyle: normal;
@propertyname-weight: normal;
@propertyvalue-color: rgba(255, 138, 216, 1);
@propertyvalue-fontstyle: normal;
@propertyvalue-weight: normal;
@unit-color: rgba(0, 250, 146, 1);
@unit-fontstyle: normal;
@unit-weight: normal;
@pseudo-color: rgba(255, 38, 0, 1);
@pseudo-fontstyle: normal;
@pseudo-weight: normal;
@doctype-color: rgba(255, 47, 146, 1);
@doctype-fontstyle: normal;
@doctype-weight: normal;
@tag-color: rgba(0, 144, 81, 1);
@tag-fontstyle: normal;
@tag-weight: normal;
@attributename-color: rgba(146, 144, 0, 1);
@attributename-fontstyle: normal;
@attributename-weight: normal;
@class-color: rgba(115, 252, 214, 1);
@class-fontstyle: normal;
@class-weight: normal;
@storage-color: rgba(148, 17, 0, 1);
@storage-fontstyle: normal;
@storage-weight: bold;
@storagemodifier-color: rgba(148, 55, 255, 1);
@storagemodifier-fontstyle: normal;
@storagemodifier-weight: bold;
@control-color: rgba(255, 38, 0, 1);
@control-fontstyle: italic;
@control-weight: normal;
@quotationmark-color: rgba(148, 55, 255, 1);
@quotationmark-weight: bold;
@string-color: rgba(148, 33, 147, 1);
@string-fontstyle: italic;
@string-weight: normal;
@operator-color: rgba(0, 249, 0, 1);
@operator-weight: bold;
@number-color: rgba(255, 47, 146, 1);
@number-fontstyle: normal;
@number-weight: normal;
@functionname-color: rgba(255, 147, 0, 1);
@functionname-fontstyle: normal;
@functionname-weight: normal;
@instance-color: rgba(255, 212, 121, 1);
@instance-fontstyle: normal;
@instance-weight: normal;
@regex-color: rgba(51, 51, 51, 1);
@regex-fontstyle: italic;
@regex-weight: normal;
@constant-color: rgba(148, 82, 0, 1);
@constant-weight: bold;
@module-color: rgba(146, 144, 0, 1);
@module-fontstyle: italic;
@module-weight: bold;
@namespace-color: rgba(0, 249, 0, 1);
@namespace-fontstyle: italic;
@namespace-weight: bold;
@type-color: rgba(255, 133, 255, 1);
@type-fontstyle: italic;
@type-weight: bold;
@identifier-color: rgba(0, 145, 147, 1);
@identifier-fontstyle: italic;
@identifier-weight: bold;
@gitgutter-lineaddedcolor: rgba(0, 255, 102, 1);
@gitgutter-linemodifiedcolor: rgba(255, 213, 0, 1);
@gitgutter-lineremovedcolor: rgba(255, 0, 0, 1);
```

```js
["rgba(66, 66, 66, 1)","rgba(255, 255, 255, 1)","rgba(146, 144, 0, 1)","italic","pacman","rgba(255, 213, 0, 1)","rgba(51, 51, 51, 1)","rgba(148, 82, 0, 1)","rgba(255, 212, 121, 1)","rgba(255, 0, 255, 1)","rgba(155, 115, 191, 1)","rgba(255, 251, 0, 1)","rgba(255, 251, 0, 1)","rgba(0, 84, 147, 1)","bold","rgba(148, 33, 147, 1)","normal","bold","rgba(148, 55, 255, 1)","normal","normal","rgba(255, 138, 216, 1)","normal","normal","rgba(0, 250, 146, 1)","normal","normal","rgba(255, 38, 0, 1)","normal","normal","rgba(255, 47, 146, 1)","normal","normal","rgba(0, 144, 81, 1)","normal","normal","rgba(146, 144, 0, 1)","normal","normal","rgba(115, 252, 214, 1)","normal","normal","rgba(148, 17, 0, 1)","normal","bold","rgba(148, 55, 255, 1)","normal","bold","rgba(255, 38, 0, 1)","italic","normal","rgba(148, 55, 255, 1)","bold","rgba(148, 33, 147, 1)","italic","normal","rgba(0, 249, 0, 1)","bold","rgba(255, 47, 146, 1)","normal","normal","rgba(255, 147, 0, 1)","normal","normal","rgba(255, 212, 121, 1)","normal","normal","rgba(51, 51, 51, 1)","italic","normal","rgba(148, 82, 0, 1)","bold","rgba(146, 144, 0, 1)","italic","bold","rgba(0, 249, 0, 1)","italic","bold","rgba(255, 133, 255, 1)","italic","bold","rgba(0, 145, 147, 1)","italic","bold","rgba(0, 255, 102, 1)","rgba(255, 213, 0, 1)","rgba(255, 0, 0, 1);"]
```
