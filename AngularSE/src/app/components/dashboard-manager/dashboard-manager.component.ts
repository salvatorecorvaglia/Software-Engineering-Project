import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";
import firebase from "firebase";
import {ManagerService} from "../../services/manager.service";
import {Agent} from "../../models/agent";
import {Manager} from "../../models/manager";

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {

  agents: Agent[];
  agent: Agent;
  manager: Manager;


  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService,
              private managerService: ManagerService,
              public router: Router) {
    this.getInfoManager();
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['dashboard_manager']);
    }
    else {
      this.router.navigate(['']);
    }
  });
  }

  ngOnInit(): void {

  }

getInfoManager(){
    let idManager: string;
    idManager = localStorage.getItem('idManager');
    this.managerService.getManager(idManager).subscribe(data => {
      this.manager = data;
      console.log(data);
    });
}

listOfAgents(){
    this.router.navigate(['agents_list']);
}

  listOfTypes(){
    this.router.navigate(['types_list']);
  }

}

