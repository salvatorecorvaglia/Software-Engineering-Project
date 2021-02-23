import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitizenprofilePage } from './citizenprofile.page';

describe('CitizenprofilePage', () => {
  let component: CitizenprofilePage;
  let fixture: ComponentFixture<CitizenprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitizenprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
