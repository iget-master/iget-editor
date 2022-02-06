import { TestBed, inject } from '@angular/core/testing';
import { CommandExecutorService } from './command-executor.service';
import { MessageService } from './message.service';

describe('CommandExecutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CommandExecutorService, MessageService]
    });
  });

  it('should be created', inject([CommandExecutorService], (service: CommandExecutorService) => {
    expect(service).toBeTruthy();
  }));
});
