import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorComponent } from './iget-editor.component';
import { IgetEditorGrippieComponent } from './iget-editor-grippie/iget-editor-grippie.component';
import { IgetEditorToolbarComponent } from './iget-editor-toolbar/iget-editor-toolbar.component';
import { IgetEditorMessageComponent } from './iget-editor-message/iget-editor-message.component';
import { MessageService } from './common/services/message.service';
import { CommandExecutorService } from './common/services/command-executor.service';
import {MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {IgetEditorToolbarGroupComponent} from './iget-editor-toolbar-group/iget-editor-toolbar-group.component';
import {IgetEditorToolbarButtonComponent} from './iget-editor-toolbar-button/iget-editor-toolbar-button.component';

describe('IgetEditorComponent', () => {
  let component: IgetEditorComponent;
  let fixture: ComponentFixture<IgetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule
      ],
      providers: [MessageService, CommandExecutorService],
      declarations: [IgetEditorComponent,
        IgetEditorGrippieComponent,
        IgetEditorToolbarComponent,
        IgetEditorToolbarGroupComponent,
        IgetEditorToolbarButtonComponent,
        IgetEditorMessageComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
