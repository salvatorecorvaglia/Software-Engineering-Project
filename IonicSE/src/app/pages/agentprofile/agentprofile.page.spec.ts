import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentprofilePage } from './agentprofile.page';

describe('AgentprofilePage', () => {
  let component: AgentprofilePage;
  let fixture: ComponentFixture<AgentprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
