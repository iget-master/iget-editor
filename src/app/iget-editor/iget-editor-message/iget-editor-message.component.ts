import { Component } from '@angular/core';

import { MessageService } from '../common/services/message.service';

@Component({
  selector: 'iget-editor-message',
  templateUrl: './iget-editor-message.component.html',
  styleUrls: ['./iget-editor-message.component.scss']
})

export class IgetEditorMessageComponent {
  /** property that holds the message to be displayed on the editor */
  ngxMessage = undefined;

  /**
   * @param _messageService service to send message to the editor
   */
  constructor(private _messageService: MessageService) {
    this._messageService.getMessage().subscribe((message: string) => this.ngxMessage = message);
  }

  /**
   * clears editor message
   */
  clearMessage(): void {
    this.ngxMessage = undefined;
  }
}
