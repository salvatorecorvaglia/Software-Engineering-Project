import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAlarmPage } from './new-alarm.page';

describe('NewAlarmPage', () => {
  let component: NewAlarmPage;
  let fixture: ComponentFixture<NewAlarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAlarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
