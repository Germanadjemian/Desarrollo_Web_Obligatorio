import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaLobbyComponent } from './pantalla-lobby.component';

describe('PantallaLobbyComponent', () => {
  let component: PantallaLobbyComponent;
  let fixture: ComponentFixture<PantallaLobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaLobbyComponent]
    });
    fixture = TestBed.createComponent(PantallaLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
