import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorToolbarGroupComponent } from './iget-editor-toolbar-group.component';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {IgetEditorToolbarComponent} from '../iget-editor-toolbar/iget-editor-toolbar.component';
import {IgetEditorToolbarButtonComponent} from '../iget-editor-toolbar-button/iget-editor-toolbar-button.component';

describe('IgetEditorToolbarGroupComponent', () => {
  let component: IgetEditorToolbarGroupComponent;
  let fixture: ComponentFixture<IgetEditorToolbarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
