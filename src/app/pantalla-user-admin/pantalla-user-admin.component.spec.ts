import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUserAdminComponent } from './pantalla-user-admin.component';

describe('PantallaUserAdminComponent', () => {
  let component: PantallaUserAdminComponent;
  let fixture: ComponentFixture<PantallaUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaUserAdminComponent]
    });
    fixture = TestBed.createComponent(PantallaUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
