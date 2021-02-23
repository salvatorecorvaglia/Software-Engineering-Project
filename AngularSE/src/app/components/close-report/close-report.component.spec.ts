import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseReportComponent } from './close-report.component';

describe('CloseReportComponent', () => {
  let component: CloseReportComponent;
  let fixture: ComponentFixture<CloseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
