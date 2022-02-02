import {
  Component, OnInit, Input, Output, ViewChild,
  EventEmitter, Renderer2, forwardRef, OnChanges, AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { CommandExecutorService } from './common/services/command-executor.service';
import { MessageService } from './common/services/message.service';

import { DefaultIgetEditorConfig } from './common/iget-editor.defaults';
import * as Utils from './common/utils/iget-editor.utils';
import {IgetEditorConfig} from './iget-editor-config';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'iget-editor',
  templateUrl: './iget-editor.component.html',
  styleUrls: ['./iget-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IgetEditorComponent),
    multi: true
  }]
})

export class IgetEditorComponent implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
  @Input() config: IgetEditorConfig;

  /** emits `blur` event when focused out from the textarea */
  @Output() blur: EventEmitter<string> = new EventEmitter<string>();
  /** emits `focus` event when focused in to the textarea */
  @Output() focus: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('igetEditorTextArea') textArea: any;
  @ViewChild('igetEditorWrapper') wrapper: any;

  Utils: any = Utils;
  value: SafeHtml;
  showPlaceholder = true;

  private onChange: (value: string) => void;
  private onTouched: () => void;

  /**
   * @param sanitizer Dom Sanitizer
   * @param _messageService service to send message to the editor message component
   * @param _commandExecutor executes command from the toolbar
   * @param _renderer access and manipulate the dom element
   */
  constructor(
    private sanitizer: DomSanitizer,
    private _messageService: MessageService,
    private _commandExecutor: CommandExecutorService,
    private _renderer: Renderer2) { }

  /**
   * events
   */
  onTextAreaFocus(): void {
    this.focus.emit('focus');
  }

  /** focus the text area when the editor is focussed */
  onEditorFocus() {
    this.textArea.nativeElement.focus();
  }

  /**
   * Executed from the contenteditable section while the input property changes
   */
  onContentChange($event: Event): void {
    const innerHtml = ($event.target as HTMLElement).innerHTML;
    if (typeof this.onChange === 'function') {
      this.onChange(innerHtml);
      this.togglePlaceholder(innerHtml);
    }
  }

  onTextAreaBlur(): void {
    /** save selection if focussed out */
    this._commandExecutor.savedSelection = Utils.saveSelection();

    if (typeof this.onTouched === 'function') {
      this.onTouched();
    }
    this.blur.emit('blur');
  }

  /**
   * resizing text area
   *
   * @param offsetY vertical height of the editable portion of the editor
   */
  resizeTextArea(offsetY: number): void {
    const oldHeight = parseInt(getComputedStyle(this.textArea.nativeElement).height, 10);

    this.textArea.nativeElement.style.height = (oldHeight + offsetY) + 'px';
  }

  /**
   * editor actions, i.e., executes command from toolbar
   *
   * @param commandName name of the command to be executed
   */
  executeCommand(commandName: string): void {
    try {
      this._commandExecutor.execute(commandName);
    } catch (error) {
      this._messageService.sendMessage(error.message);
    }
  }

  /**
   * Write a new value to the element.
   *
   * @param value value to be executed when there is a change in contenteditable
   */
  writeValue(value: any): void {
    this.togglePlaceholder(value);

    if (value === null || value === undefined || value === '' || value === '<br>') {
      value = null;
    }

    this.value = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  /**
   * Set the function to be called
   * when the control receives a change event.
   *
   * @param fn a function
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Set the function to be called
   * when the control receives a touch event.
   *
   * @param fn a function
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * toggles placeholder based on input string
   *
   * @param value A HTML string from the editor
   */
  togglePlaceholder(value: any): void {
    if (!value || value === '<br>' || value === '') {
      this.showPlaceholder = true;
    } else {
      this.showPlaceholder = false;
    }
  }

  ngOnInit() {
    // this.height = this.height || this.textArea.nativeElement.offsetHeight;

    this.executeCommand('enableObjectResizing');
  }

  ngOnChanges(): void {
    this.config = Object.assign({}, DefaultIgetEditorConfig, this.config);
  }

  ngAfterViewInit() {
    console.log('viewInit', this.textArea);
  }
}
