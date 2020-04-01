# Configuration

The Configuration can be provided using `config` property

## Usage

```HTML
<iget-editor [config]="editorConfig" [(ngModel)]="htmlContent"></iget-editor>
```

### Default Configuration

The config property is a Object that implements [`IgetEditorConfig`](https://github.com/iget-master/iget-editor/blob/master/src/app/iget-editor/iget-editor-config.d.ts) interface. The default configuration is:

```js
{
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  toolbar: [
    ['bold', 'italic', 'underline', 'strikethrough'],
    ['font', 'fontSize', 'textColor', 'fillColor', 'removeFormat'],
    ['align'],
    ['indent', 'quote', 'unorderedList', 'orderedList'],
    ['undo', 'redo'],
    ['anchor']
  ]
}
```
