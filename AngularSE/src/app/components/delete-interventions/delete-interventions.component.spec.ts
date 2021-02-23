import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterventionsComponent } from './delete-interventions.component';

describe('DeleteInterventionsComponent', () => {
  let component: DeleteInterventionsComponent;
  let fixture: ComponentFixture<DeleteInterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
