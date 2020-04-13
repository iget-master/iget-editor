import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IgetEditorToolbarButtonComponent } from './iget-editor-toolbar-button.component';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Component, DebugElement, Input} from '@angular/core';
import {By} from '@angular/platform-browser';
import {click} from '../../../testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  template: `
    <iget-editor-toolbar-button [menu]="menu" icon="format_bold" title="make-it-bold">
        <button mat-menu-item *ngIf="menu">
            Menu item
        </button>
    </iget-editor-toolbar-button>
  `
})
class TestHostComponent {
  @Input() menu = false;
}

describe('IgetEditorToolbarButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;
  let buttonEl;
  let iconEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatButtonModule,
        NoopAnimationsModule,
      ],
      declarations: [
        IgetEditorToolbarButtonComponent,
        TestHostComponent,
      ],
      providers: [
        CommandExecutorService,
        MessageService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    buttonEl = debugElement.query(By.css('button[mat-icon-button]'));
    iconEl = debugElement.query(By.css('mat-icon'));
  });

  it('should have an button with icon and title', () => {
    expect(buttonEl).toBeTruthy('Button must exists');
    expect(buttonEl.nativeElement.getAttribute('title')).toBe('make-it-bold');
    expect(iconEl).toBeTruthy('Icon must exists');
    expect(iconEl.nativeElement.textContent).toBe('format_bold');
  });

  it('should show mat-menu if @input() menu === true', () => {
    component.menu = true;
    fixture.detectChanges();
    click(buttonEl);
    fixture.detectChanges();

    const menuEl = debugElement.query(By.css('iget-editor-toolbar-button > mat-menu'));
    expect(menuEl).toBeTruthy('MatMenu must exists');

    // @todo: test items inside mat-menu
  });
});
