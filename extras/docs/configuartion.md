# Configuration

The Configuration can be provided using `config` property

## Usage

The `IgetEditorComponent` implements the `ControlValueAccessor` interface, so it can be used with `ngModel`, `formControl`, `formControlName` directives:

### ngModel example

```HTML
<iget-editor [(ngModel)]="htmlContent"></iget-editor>
```

### formControlName example

```HTML
<div [formGroup]="myFormGroup">
    <iget-editor formControlName="myControlName"></iget-editor>
</div>
```

### Custom configuration

You can override default configuration by passing an object to the `[config]` input:


```typescript
  public myConfig: IgetEditorCustomConfig = {
    placeholder: 'My Custom Placeholder',
  }
```

```HTML
<iget-editor [config]="myConfig" [(ngModel)]="htmlContent"></iget-editor>
```

The `[config]` input accepts an object of type [`IgetEditorCustomConfig`](interfaces/IgetEditorConfig.html).

The default configuration is:

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
  resizable: true,
  toolbarPosition: 'after',
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
