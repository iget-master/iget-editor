# Toolbar

Toolbar option is an array of arrays. The default is

```js
[
  ['bold', 'italic', 'underline', 'strikethrough'],
  ['font', 'fontSize', 'textColor', 'fillColor', 'removeFormat'],
  ['align'],
  ['indent', 'quote', 'unorderedList', 'orderedList'],
  ['undo', 'redo'],
  ['anchor']
]
```

and it can be customized. Each array represents a button group and the value represents the name of the button.

Toolbar is provided with the editor configuration as

```js
{
  'toolbar': [
     ['bold', 'italic', 'underline', 'strikethrough'],
     ['font', 'fontSize', 'textColor', 'fillColor', 'removeFormat'],
  ]
}
```

Providing empty toolbar array will remove all buttons.
