import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomecitizenPage } from './homecitizen.page';

describe('HomecitizenPage', () => {
  let component: HomecitizenPage;
  let fixture: ComponentFixture<HomecitizenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecitizenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomecitizenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
