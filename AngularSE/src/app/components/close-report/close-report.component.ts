import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";
import firebase from "firebase";
import {AssignService} from "../../services/assign.service";
import {Assign} from "../../models/assign";
import {Manager} from "../../models/manager";
import {Agent} from "../../models/agent";
import {AgentService} from "../../services/agent.service";

@Component({
  selector: 'app-close-report',
  templateUrl: './close-report.component.html',
  styleUrls: ['./close-report.component.css']
})
export class CloseReportComponent implements OnInit {

assigns: Assign[];
idAgent: string;
hidden = true;
agent: Agent;
manager: Manager;
hideme = [];
idAssign: number;
dis = false;
  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              public assignService: AssignService,
              public agentService: AgentService) {
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['close_report']);
    }
    else {
      this.router.navigate(['']);
    }
  });
  }

  ngOnInit(): void {
this.getAssignsByIdAgent();
this.idAgent = localStorage.getItem('idAgent');
this.agentService.getAgentById(this.idAgent).subscribe(data => {
      console.log(data);
      this.agent = data;
      this.manager = data.managerDTO;
    });
  }

  getAssignsByIdAgent(){
    this.idAgent = localStorage.getItem('idAgent');
    this.assignService.getAllAssignByIdAgent(this.idAgent).subscribe( data => {
      console.log(data);
      this.assigns = data;
    });
  }


  async closeIntervention(idAssign, type, idIntervention, lat, lon, address, endDate, startValidate, firstReport, lastReport){
    let confirm: number;
    let concluded: number;
    let intervention: any;
    let status: string;
    let manager: Manager;
    let agent: Agent;
    let startDate: string;
    let endValidate: string;
    endValidate = new Date().toISOString();
    startDate = startValidate;
    manager = this.manager;
    agent = this.agent;
    confirm = 1;
    concluded = 1;
    status = 'closed';
    intervention = {
      idIntervention,
      type,
      lat,
      lon,
      address,
      startDate,
      endDate,
      firstReport,
      lastReport,
      status
    };
    await this.assignService.updateAssign(idAssign, {idAssign, manager, agent, intervention, confirm, concluded, startValidate, endValidate} as Assign).subscribe(data => {
      console.log(data);
    });
    window.alert('Report Sended, intervention closed');
    this.dis = true;
    this.getAssignsByIdAgent();
  }




}
