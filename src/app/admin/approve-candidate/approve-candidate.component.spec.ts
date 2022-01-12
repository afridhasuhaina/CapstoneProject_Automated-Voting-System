import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCandidateComponent } from './approve-candidate.component';

describe('ApproveCandidateComponent', () => {
  let component: ApproveCandidateComponent;
  let fixture: ComponentFixture<ApproveCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
