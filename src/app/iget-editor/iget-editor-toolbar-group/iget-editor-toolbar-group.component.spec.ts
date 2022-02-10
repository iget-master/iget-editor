import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgetEditorToolbarGroupComponent } from './iget-editor-toolbar-group.component';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {IgetEditorToolbarComponent} from '../iget-editor-toolbar/iget-editor-toolbar.component';
import {IgetEditorToolbarButtonComponent} from '../iget-editor-toolbar-button/iget-editor-toolbar-button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

describe('IgetEditorToolbarGroupComponent', () => {
  let component: IgetEditorToolbarGroupComponent;
  let fixture: ComponentFixture<IgetEditorToolbarGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
      ],
      declarations: [
        IgetEditorToolbarComponent,
        IgetEditorToolbarGroupComponent,
        IgetEditorToolbarButtonComponent
      ],
      providers: [CommandExecutorService, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgetEditorToolbarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
