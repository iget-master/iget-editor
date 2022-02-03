import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'iget-editor-grippie',
  templateUrl: './iget-editor-grippie.component.html',
  styleUrls: ['./iget-editor-grippie.component.scss']
})

export class IgetEditorGrippieComponent {
  /** height of the editor */
  height: number;
  /** previous value befor resizing the editor */
  oldY = 0;
  /** set to true on mousedown event */
  grabber = false;

  @Output() resized: EventEmitter<number>;

  /**
   * Constructor
   */
  constructor() { }

  /**
   *
   * @param event Mouseevent
   *
   * Update the height of the editor when the grabber is dragged
   */
  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }

    this.resized.emit(event.clientY - this.oldY);
    this.oldY = event.clientY;
  }

  /**
   *
   * @param event Mouseevent
   *
   * set the grabber to false on mouse up action
   */
  @HostListener('document:mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener('mousedown', ['$event']) onResize(event: MouseEvent, resizer?: Function) {
    this.grabber = true;
    this.oldY = event.clientY;
    event.preventDefault();
  }

}
