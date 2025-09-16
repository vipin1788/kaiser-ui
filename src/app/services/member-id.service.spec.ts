import { TestBed } from '@angular/core/testing';

import { MemberIdServiceService } from './member-id.service';

describe('MemberIdServiceService', () => {
  let service: MemberIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
