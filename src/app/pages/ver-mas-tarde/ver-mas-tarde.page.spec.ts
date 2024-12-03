import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMasTardePage } from './ver-mas-tarde.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('VerMasTardePage', () => {
  let component: VerMasTardePage;
  let fixture: ComponentFixture<VerMasTardePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(VerMasTardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
