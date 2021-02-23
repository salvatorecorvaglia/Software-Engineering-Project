import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstreportComponent } from './firstreport.component';

describe('FirstreportComponent', () => {
  let component: FirstreportComponent;
  let fixture: ComponentFixture<FirstreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstreportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
