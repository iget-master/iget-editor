export type AvailableToolbarOptions =
  'bold'|'italic'|'underline'|'strikethrough'|
  'font'|'fontSize'|'textColor'|'fillColor'|
  'removeFormat'|'align'|'indent'|'quote'|'orderedList'|
  'unorderedList'|'undo'|'redo'|'anchor';

export type ToolbarConfig = Array<Array<AvailableToolbarOptions>>;

export interface IgetEditorConfig {
  editable: boolean;
  spellcheck: boolean;
  height: string|number;
  minHeight: string|number;
  width: string|number;
  minWidth: string|number;
  translate: 'yes'|'no';
  enableToolbar: boolean;
  showToolbar: boolean;
  placeholder: string;
  toolbar: ToolbarConfig;
}
