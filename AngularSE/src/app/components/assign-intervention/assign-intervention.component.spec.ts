import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInterventionComponent } from './assign-intervention.component';

describe('AssignInterventionComponent', () => {
  let component: AssignInterventionComponent;
  let fixture: ComponentFixture<AssignInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
