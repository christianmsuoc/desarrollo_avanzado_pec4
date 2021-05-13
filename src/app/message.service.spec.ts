import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('add should increase the number of messages by 1', () => {
    const size = service.messages.length;
    service.add('New message');
    const newSize = service.messages.length;
    expect(newSize).toBe(size + 1);
  });

  it('add should put the added message in the last position', () => {
    const message = 'New message';
    service.add(message);
    expect(service.messages[service.messages.length - 1]).toBe(message);
  });

  it('clear method should delete array content when messages is empty', () => {
    service.clear();
    expect(service.messages).toEqual([]);
  });

  it('clear method should delete array content when messages is not empty', () => {
    service.add('Message 1');
    service.add('Message 2');
    service.clear();
    expect(service.messages).toEqual([]);
  });
});
