import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorToolbarComponent } from './iget-editor-toolbar.component';
import { IgetEditorConfig } from '../common/iget-editor.defaults';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {IgetEditorToolbarGroupComponent} from '../iget-editor-toolbar-group/iget-editor-toolbar-group.component';
import {IgetEditorToolbarButtonComponent} from '../iget-editor-toolbar-button/iget-editor-toolbar-button.component';

describe('IgetEditorToolbarComponent', () => {
  let component: IgetEditorToolbarComponent;
  let fixture: ComponentFixture<IgetEditorToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule,
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
    fixture = TestBed.createComponent(IgetEditorToolbarComponent);
    component = fixture.componentInstance;
    component.config = IgetEditorConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
