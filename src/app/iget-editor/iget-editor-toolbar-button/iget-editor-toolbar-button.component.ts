import {Component, Input, Output, EventEmitter, OnInit, ViewChild, Host} from '@angular/core';
import {IgetEditorToolbarComponent} from '../iget-editor-toolbar/iget-editor-toolbar.component';

@Component({
  selector: 'iget-editor-toolbar-button',
  templateUrl: './iget-editor-toolbar-button.component.html',
  styleUrls: ['./iget-editor-toolbar-button.component.scss'],
  providers: []
})

export class IgetEditorToolbarButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() action: string;

  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(@Host() private toolbar: IgetEditorToolbarComponent) {
  }

  /**
   * Clicking on button will trigger a command on editor if
   * an action is defined, otherwise it will emit the click
   * event to the click output.
   */
  handleClick($event: MouseEvent) {
    if (this.action) {
      this.toolbar.triggerCommand(this.action);
    } else {
      this.click.emit($event);
    }

    $event.stopPropagation();
  }

  ngOnInit(): void {
  }
}
