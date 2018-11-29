import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorGrippieComponent } from './iget-editor-grippie.component';
import { IgetEditorComponent } from '../iget-editor.component';
import { MessageService } from '../common/services/message.service';
import { CommandExecutorService } from '../common/services/command-executor.service';

describe('NgxGrippieComponent', () => {
  let component: IgetEditorGrippieComponent;
  let fixture: ComponentFixture<IgetEditorGrippieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [IgetEditorGrippieComponent],
      providers: [
        IgetEditorComponent,
        MessageService,
        CommandExecutorService,
        { provide: ElementRef, useValue: this },
        { provide: Renderer2, useValue: this }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgetEditorGrippieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
