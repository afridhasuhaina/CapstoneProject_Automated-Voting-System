import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceResultComponent } from './announce-result.component';

describe('AnnounceResultComponent', () => {
  let component: AnnounceResultComponent;
  let fixture: ComponentFixture<AnnounceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnounceResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
