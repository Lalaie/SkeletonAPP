import { TestBed } from '@angular/core/testing';

import { GetapiService } from './getapi.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetapiService', () => {
  let service: GetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(GetapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
