import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCreateActivityComponent } from './pantalla-create-activity.component';

describe('PantallaCreateActivityComponent', () => {
  let component: PantallaCreateActivityComponent;
  let fixture: ComponentFixture<PantallaCreateActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaCreateActivityComponent]
    });
    fixture = TestBed.createComponent(PantallaCreateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
