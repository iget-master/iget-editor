/**
 * toolbar default configuration
 */
import {IgetEditorConfig} from '../iget-editor-config';

export const DefaultIgetEditorConfig: IgetEditorConfig = {
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
};
