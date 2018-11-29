import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import * as Utils from '../common/utils/iget-editor.utils';
import {MatDialog} from '@angular/material';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';

@Component({
  selector: 'iget-editor-toolbar',
  templateUrl: './iget-editor-toolbar.component.html',
  styleUrls: ['./iget-editor-toolbar.component.scss'],
  providers: []
})

export class IgetEditorToolbarComponent implements OnInit {
  /** font family name */
  fontName = '';
  /** font size */
  fontSize = '';

  /**
   * Editor configuration
   */
  @Input() config: any;
  /**
   * Emits an event when a toolbar button is clicked
   */
  @Output() execute: EventEmitter<string> = new EventEmitter<string>();

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
          console.log('é email');
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

  ngOnInit() {
  }
}
