import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddphotoagentPage } from './addphotoagent.page';

describe('AddphotoagentPage', () => {
  let component: AddphotoagentPage;
  let fixture: ComponentFixture<AddphotoagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphotoagentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddphotoagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
