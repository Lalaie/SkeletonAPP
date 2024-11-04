import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMasTardePage } from './ver-mas-tarde.page';

describe('VerMasTardePage', () => {
  let component: VerMasTardePage;
  let fixture: ComponentFixture<VerMasTardePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMasTardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
