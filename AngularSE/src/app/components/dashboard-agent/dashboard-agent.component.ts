import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";
import firebase from "firebase";
import {AgentService} from "../../services/agent.service";
import {Agent} from "../../models/agent";

@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',
  styleUrls: ['./dashboard-agent.component.css']
})
export class DashboardAgentComponent implements OnInit {
  agent: Agent;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService,
              private agentService: AgentService,
              public router: Router){ firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['dashboard_agent']);
    }
    else {
      this.router.navigate(['']);
    }
  });
  }

  ngOnInit(): void {
    this.getInfoAgent();
  }

  getInfoAgent(){
    let idAgent: string;
    idAgent = localStorage.getItem('idAgent');
    this.agentService.getAgentById(idAgent).subscribe(data => {
      this.agent = data;
      console.log(data);
    });
  }




}
