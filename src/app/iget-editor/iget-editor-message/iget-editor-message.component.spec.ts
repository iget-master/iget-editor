import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgetEditorMessageComponent } from './iget-editor-message.component';
import { MessageService } from '../common/services/message.service';

describe('IgetEditorMessageComponent', () => {
  let component: IgetEditorMessageComponent;
  let fixture: ComponentFixture<IgetEditorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [IgetEditorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgetEditorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
