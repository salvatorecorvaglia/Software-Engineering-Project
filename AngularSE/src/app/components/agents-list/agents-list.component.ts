import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import firebase from "firebase";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";
import {Agent} from "../../models/agent";
import {ManagerService} from "../../services/manager.service";





@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.css']
})
export class AgentsListComponent implements OnInit {
  agents: Agent[];
  agent: Agent;
  closeResult: string;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService,
              private managerService: ManagerService,
              public router: Router) { firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['agents_list']);
    }
    else {
      this.router.navigate(['']);
    }
  });
  }

  ngOnInit(): void {
    this.managerService.getAllAgents().subscribe(data => {
      console.log(data);
      this.agents = data;
    });

  }



}
