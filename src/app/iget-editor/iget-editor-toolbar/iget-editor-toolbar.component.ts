import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import * as Utils from '../common/utils/iget-editor.utils';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ToolbarConfig} from '../iget-editor-config';
import {COLOR_PALETTE} from './color-palette';

@Component({
  selector: 'iget-editor-toolbar',
  templateUrl: './iget-editor-toolbar.component.html',
  styleUrls: ['./iget-editor-toolbar.component.scss'],
  providers: []
})

export class IgetEditorToolbarComponent {
  /** font family name */
  fontName = '';
  /** font size */
  fontSize = '';

  /**
   * Editor configuration
   */
  @Input() config: ToolbarConfig;
  /**
   * Emits an event when a toolbar button is clicked
   */
  @Output() execute: EventEmitter<string> = new EventEmitter<string>();
  colors = COLOR_PALETTE;

  constructor(private _messageService: MessageService,
    private _commandExecutorService: CommandExecutorService,
    private dialog: MatDialog
  ) {}

  /**
   * enable or diable toolbar based on configuration
   *
   * @param value name of the toolbar buttons
   */
  canEnableToolbarOptions(value): boolean {
    return Utils.canEnableToolbarOptions(value, this.config['toolbar']);
  }

  /**
   * triggers command from the toolbar to be executed and emits an event
   *
   * @param command name of the command to be executed
   */
  triggerCommand(command: string): void {
    this.execute.emit(command);
  }

  /**
   * inserts link in the editor
   */
  insertLink(): void {
    const linkDialogRef = this.dialog.open(LinkDialogComponent, {
      data: {
        selection: this._commandExecutorService.savedSelection
      }
    });

    linkDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        let urlLink = data.url;
        const emailPattern = new RegExp([
          '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)',
          '|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s',
          '@\\"]{2,})$'
        ].join(''));

        if (emailPattern.exec(urlLink)) {
          urlLink = `mailto:${urlLink}`;
        }

        this._commandExecutorService.createLink({
          urlLink,
          urlText: data.label,
        });
      }
    });
  }

  /** insert text/background color */
  setTextColor(color: string): void {
    this.insertColor(color, 'textColor');
  }

  /** insert text/background color */
  setBackgroundColor(color: string): void {
    this.insertColor(color, 'backgroundColor');
  }

  /** insert text/background color */
  insertColor(color: string, where: string): void {
    try {
      this._commandExecutorService.insertColor(color, where);
    } catch (error) {
      this._messageService.sendMessage(error.message);
    }
  }

  /** set font size */
  setFontSize(fontSize: string): void {
    try {
      this._commandExecutorService.setFontSize(fontSize);
    } catch (error) {
      this._messageService.sendMessage(error.message);
    }
  }

  /** set font Name/family */
  setFontName(fontName: string): void {
    try {
      this._commandExecutorService.setFontName(fontName);
    } catch (error) {
      this._messageService.sendMessage(error.message);
    }
  }
}
