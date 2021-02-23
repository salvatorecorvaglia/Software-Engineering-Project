import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AgentService} from '../../services/agent.service';
import {Agent} from '../../models/agent';
import firebase from 'firebase';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.page.html',
  styleUrls: ['./agentprofile.page.scss'],
})
export class AgentprofilePage implements OnInit {

  agent: Agent;
  idAgent: string;
  idUser: number;
  disabled = true;
  hidden = false;
  name: string;
  surname: string;
  city: string;
  address: string;
  state: string;
  birthDate: string;
  sex: string;
  lat: number;
  lon: number;
  email: string;

  constructor(public router: Router,
              public agentService: AgentService,
              public toastCtrl: ToastController) { firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigateByUrl('/agentprofile');
    }
    else {
      this.router.navigateByUrl('/slides');
    }
  }); }

  ngOnInit() {
    this.getAgentData();
  }

  async getAgentData(){
    this.idAgent = localStorage.getItem('idAgent');
    await this.agentService.getAgentById(this.idAgent).subscribe(data => {
      this.agent = data;
      this.name = data.userDTO.name;
      this.surname = data.userDTO.surname;
      this.address = data.userDTO.address;
      this.city = data.userDTO.city;
      this.state = data.userDTO.state;
      this.email = data.userDTO.email;
      this.birthDate = data.userDTO.birthDate;
      this.sex = data.userDTO.sex;
      this.lat = data.lat;
      this.lon = data.lon;
      this.idUser = data.userDTO.idUser;
    });
  }

  async updateAgent(name, surname, sex, birthDate, address, city, state){
    if (name === '' ){
      name = this.name;
    }
    if ( surname === ''){
      surname = this.surname;
    }
    if (address === ''){
      address = this.address;
    }
    if (city === ''){
      city = this.city;
    }
    if (state === ''){
      state = this.state;
    }
    let email: string;
    email = this.email;
    let token: string;
    token = localStorage.getItem('token');
    birthDate = new Date(birthDate).toISOString();
    const user = {
      name,
      surname,
      sex,
      birthDate,
      address,
      city,
      email,
      state,
      token
    };
    await this.agentService.updateAgent(this.idUser.toString(), user).subscribe(data => {
      console.log(data);
      this.getAgentData();
      this.presentToast();
    });

  }

  modify(){
    this.disabled = false;
    this.hidden = true;
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Data Updated',
      duration: 2000
    });
    await toast.present();
  }

}
