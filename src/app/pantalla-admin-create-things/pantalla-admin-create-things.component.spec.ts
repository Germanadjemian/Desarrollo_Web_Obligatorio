import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaAdminCreateThingsComponent } from './pantalla-admin-create-things.component';

describe('PantallaAdminCreateThingsComponent', () => {
  let component: PantallaAdminCreateThingsComponent;
  let fixture: ComponentFixture<PantallaAdminCreateThingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaAdminCreateThingsComponent]
    });
    fixture = TestBed.createComponent(PantallaAdminCreateThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
