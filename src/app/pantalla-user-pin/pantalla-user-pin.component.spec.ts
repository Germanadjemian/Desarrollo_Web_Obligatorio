import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUserPinComponent } from './pantalla-user-pin.component';

describe('PantallaUserPinComponent', () => {
  let component: PantallaUserPinComponent;
  let fixture: ComponentFixture<PantallaUserPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaUserPinComponent]
    });
    fixture = TestBed.createComponent(PantallaUserPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
