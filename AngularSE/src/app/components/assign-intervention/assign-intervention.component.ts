import {Component, EventEmitter, OnInit, Output, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import firebase from 'firebase';
import {AgentService} from '../../services/agent.service';
import {Agent} from '../../models/agent';
import {AssignService} from '../../services/assign.service';
import {Assign} from '../../models/assign';
import {InterventionService} from '../../services/intervention.service';

@Component({
  selector: 'app-assign-intervention',
  templateUrl: './assign-intervention.component.html',
  styleUrls: ['./assign-intervention.component.css']
})
export class AssignInterventionComponent implements OnInit {

  idIntervention: number;
  agents: Agent[];
  agents1: Agent[];
  checks = false;
  disabled = false;
  idManager: string;
  idUser: string;
  lat: number;
  lon: number;
  @ViewChildren('idagent') item;
  idAgents = [];
  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              public agentService: AgentService,
              public assignService: AssignService,
              public interventionService: InterventionService) {

    this.idIntervention = this.router.getCurrentNavigation().extras.state.idIntervention;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['assign_agent']);
      }
      else {
        this.router.navigate(['']);
      }
    });

  }

  ngOnInit(): void {
    this.agentService.getAllAgent().subscribe(data => {
      this.agents = data;
      console.log(data);
    });
    this.interventionService.getInterventionById(this.idIntervention.toString()).subscribe(data => {
  this.lat = data.lat;
  this.lon = data.lon;
});
  }

  onCheckboxSelect(id, event){
    if (event.target.checked === true) {
      this.idAgents.push({ id, checked: event.target.checked});
      console.log(this.idAgents);
    }
    if (event.target.checked === false) {
      this.idAgents = this.idAgents.filter((item) => item.id !== id);
      console.log(this.idAgents);
    }
      }

      sendAssign() {
    let confirm: number;
    let concluded: number;
    concluded = 0;
    confirm = 0;
    for (const item of this.idAgents){
      let idUser: string;
      this.agentService.getAgentById(item.id).subscribe(data1 => {
        idUser = data1.userDTO.idUser.toString();
        this.idManager = localStorage.getItem('idManager');
        this.assignService.assignAgentToIntervention(this.idManager, this.idIntervention.toString(), item.id, idUser, {confirm, concluded} as Assign).subscribe(data => {
           console.log(data);
         });
      });
       }
    window.alert('Task assigned to the agents!!');
      }

      sendToAll(){
        let confirm: number;
        let concluded: number;
        concluded = 0;
        confirm = 0;
        for (const item of this.agents){
          let idUser: string;
          idUser = item.userDTO.idUser.toString();
          this.idManager = localStorage.getItem('idManager');
          this.assignService.assignAgentToIntervention(this.idManager, this.idIntervention.toString(), item.idAgent.toString(), idUser, {confirm, concluded} as Assign).subscribe(data => {
            console.log(data);
          });
        }
        window.alert('Task assigned to the agents!!');
      }

     async sendAutomatically() {
        let confirm: number;
        let concluded: number;
        concluded = 0;
        confirm = 0;
        await this.agentService.getAgentByGpsLocation(this.lat, this.lon, 0.15).subscribe(data => {
   this.agents1 = data;
   console.log(this.agents1);
   if (this.agents1 == null){
            window.alert('There are no agents nearby!!');
          }else {
            for (const item1 of this.agents1) {
              const idUser = item1.userDTO.idUser.toString();
              this.idManager = localStorage.getItem('idManager');
              this.assignService.assignAgentToIntervention(this.idManager, this.idIntervention.toString(), item1.idAgent.toString(), idUser, {
                confirm,
                concluded
              } as Assign).subscribe(data1 => {
                console.log(data1);
              });
              window.alert('Task assigned to the agent ' + item1.userDTO.name + '' + item1.userDTO.surname + '!');
            }
          }
      });
}


}
