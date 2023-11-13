import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaAdminLogInComponent } from './pantalla-admin-log-in.component';

describe('PantallaAdminLogInComponent', () => {
  let component: PantallaAdminLogInComponent;
  let fixture: ComponentFixture<PantallaAdminLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaAdminLogInComponent]
    });
    fixture = TestBed.createComponent(PantallaAdminLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
