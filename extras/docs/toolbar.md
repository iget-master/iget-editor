# Toolbar

You can customize the toolbar by providing `toolbar` option into editor config:

```typescript
  public myConfig: IgetEditorCustomConfig = {
    toolbar: [
        // Note: Each array inside toolbar option will be
        // rendered as a button group in the toolbar.
        ['bold', 'italic', 'underline']
    ]
  }
```

```HTML
<iget-editor [config]="myConfig" [(ngModel)]="htmlContent"></iget-editor>
```

The default toolbar contains all available buttons:
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

**Note:** Providing empty toolbar array will remove all buttons.
