import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaGameComponent } from './pantalla-game.component';

describe('PantallaGameComponent', () => {
  let component: PantallaGameComponent;
  let fixture: ComponentFixture<PantallaGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaGameComponent]
    });
    fixture = TestBed.createComponent(PantallaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
