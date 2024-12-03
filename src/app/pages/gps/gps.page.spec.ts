import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpsPage } from './gps.page';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

describe('GpsPage', () => {
  let component: GpsPage;
  let fixture: ComponentFixture<GpsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeGeocoder]
    });
    fixture = TestBed.createComponent(GpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
