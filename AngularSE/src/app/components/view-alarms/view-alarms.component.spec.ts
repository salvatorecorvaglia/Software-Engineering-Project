import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlarmsComponent } from './view-alarms.component';

describe('ViewAlarmsComponent', () => {
  let component: ViewAlarmsComponent;
  let fixture: ComponentFixture<ViewAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
