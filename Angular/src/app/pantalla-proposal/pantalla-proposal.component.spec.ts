import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProposalComponent } from './pantalla-proposal.component';

describe('PantallaProposalComponent', () => {
  let component: PantallaProposalComponent;
  let fixture: ComponentFixture<PantallaProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaProposalComponent]
    });
    fixture = TestBed.createComponent(PantallaProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
