import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import firebase from 'firebase';
import {Agent} from '../../models/agent';
import {ManagerService} from '../../services/manager.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  @ViewChild('agentform') form: any;

  idmanager: string;
  agents: Agent[];
  user: User;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              private managerService: ManagerService) {
  }

  ngOnInit(): void {
    this.idmanager = localStorage.getItem('idManager');
    this.user = {
      idUser: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      birthDate: '',
      sex: '',
      address: '',
      city: '',
      state: '',
      token: ''
    };
  }

  // tslint:disable-next-line:variable-name
  onSignUp(idmanager, name, surname, birthDate,  sex,  address,  city, state, email, password){
    this.idmanager = localStorage.getItem('idManager');
    const idUser = null;
    const token = '';
    const lat = null;
    const lon = null;
    // tslint:disable-next-line:variable-name
    let hireDate: string;
    hireDate = new Date().toISOString();
    birthDate = new Date(birthDate).toISOString();
    // tslint:disable-next-line:variable-name
    const endDate = null;
    const userDTO = {
      idUser,
      name,
      surname,
      email,
      birthDate,
      sex,
      address,
      city,
      state,
      token
    };
    this.managerService.addAgent(idmanager, {userDTO, lat, lon, hireDate, endDate} as Agent).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['agents_list']);
    window.alert('Agent Added');
    return firebase.auth().createUserWithEmailAndPassword(email, password);

  }
}
