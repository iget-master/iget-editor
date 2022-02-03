import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'iget-editor-toolbar-button',
  templateUrl: './iget-editor-toolbar-button.component.html',
  styleUrls: ['./iget-editor-toolbar-button.component.scss'],
  providers: []
})

export class IgetEditorToolbarButtonComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() menu = false;

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  handleClick($event: MouseEvent) {
    this.clicked.emit($event);

    $event.stopPropagation();
  }
}
