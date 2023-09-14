import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadconstructionComponent } from './roadconstruction.component';

describe('RoadconstructionComponent', () => {
  let component: RoadconstructionComponent;
  let fixture: ComponentFixture<RoadconstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadconstructionComponent]
    });
    fixture = TestBed.createComponent(RoadconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
