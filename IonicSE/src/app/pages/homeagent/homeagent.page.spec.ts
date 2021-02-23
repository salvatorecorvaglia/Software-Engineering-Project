import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeagentPage } from './homeagent.page';

describe('HomeagentPage', () => {
  let component: HomeagentPage;
  let fixture: ComponentFixture<HomeagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeagentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
