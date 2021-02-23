import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsListComponent } from './warnings-list.component';

describe('WarningListComponent', () => {
  let component: WarningsListComponent;
  let fixture: ComponentFixture<WarningsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
