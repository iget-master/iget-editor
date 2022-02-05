import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorToolbarComponent } from './iget-editor-toolbar.component';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {IgetEditorToolbarGroupComponent} from '../iget-editor-toolbar-group/iget-editor-toolbar-group.component';
import {IgetEditorToolbarButtonComponent} from '../iget-editor-toolbar-button/iget-editor-toolbar-button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {DefaultIgetEditorConfig} from '../common/default-iget-editor-config';

describe('IgetEditorToolbarComponent', () => {
  let component: IgetEditorToolbarComponent;
  let fixture: ComponentFixture<IgetEditorToolbarComponent>;

  beforeEach(waitForAsync(() => {
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
    component.config = DefaultIgetEditorConfig.toolbar;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
