import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeGeocoder]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
