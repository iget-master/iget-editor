# Iget Editor

<p align="center">
  <a href="https://github.com/iget-master/iget-editor">
   <img src="https://raw.githubusercontent.com/iget-master/iget-editor/master/src/assets/icons/iget-editor.png" alt="IgetEditor">
  </a>
</p>
<p align="center">A WYSIWYG Editor for Angular Material applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/iget-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/iget-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/iget-editor">
    <img alt="npm" src="https://img.shields.io/npm/dm/iget-editor.svg">
  </a>
  <a href="https://github.com/iget-master/iget-editor/blob/master/LICENSE">
    <img alt="licence" src="https://img.shields.io/npm/l/iget-editor.svg">
  </a>
</p>

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install iget-editor --save
# or
yarn add iget-editor
```

### Usage

Import `iget-editor` module

```typescript
import { IgetEditorModule } from 'iget-editor';

@NgModule({
  imports: [ IgetEditorModule ]
})
```

Import [Material Icon font](https://material.io/tools/icons/) into your application by adding this to your `index.html` `head` tag:

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 
Then insert the editor on your template

```html
<iget-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></iget-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

## Compatibility

All Evergreen-Browsers are supported

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera

## Demo

Demo at stackblitz [iget-editor](https://iget-editor.stackblitz.io/)

## Documentation

The documentation was not updated yet after migrating `ngx-editor` to `iget-editor`.
<strike>Documentation is auto-generated using [compodoc][compodoc], and can be viewed here: [https://iget-master.github.io/iget-editor/](https://iget-master.github.io/iget-editor/)</strike>

## Thanks to

This package is based on [ngx-editor](https://github.com/sibiraj-s/ngx-editor) from [sibiraj-s](https://github.com/sibiraj-s), so this package is thanks to his work.  

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://iget-master.github.io/
[wiki]:https://github.com/iget-master/iget-editor/wiki/IgetEditor
[compodoc]: https://compodoc.github.io/website/
