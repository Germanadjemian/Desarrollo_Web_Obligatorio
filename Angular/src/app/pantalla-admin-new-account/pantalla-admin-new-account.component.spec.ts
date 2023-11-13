import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaAdminNewAccountComponent } from './pantalla-admin-new-account.component';

describe('PantallaAdminNewAccountComponent', () => {
  let component: PantallaAdminNewAccountComponent;
  let fixture: ComponentFixture<PantallaAdminNewAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaAdminNewAccountComponent]
    });
    fixture = TestBed.createComponent(PantallaAdminNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
