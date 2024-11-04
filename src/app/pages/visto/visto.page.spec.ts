import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistoPage } from './visto.page';

describe('VistoPage', () => {
  let component: VistoPage;
  let fixture: ComponentFixture<VistoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
