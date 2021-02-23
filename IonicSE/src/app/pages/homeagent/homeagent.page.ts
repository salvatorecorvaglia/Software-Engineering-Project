import { Component, OnInit } from '@angular/core';
import {Agent} from '../../models/agent';
import {FirebaseService} from '../../services/firebase.service';
import {AlertController, ModalController, NavController, ToastController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';
import {AlarmService} from '../../services/alarm.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import firebase from 'firebase';
import {AgentService} from '../../services/agent.service';
import {AssignService} from '../../services/assign.service';
import {Assign} from '../../models/assign';
import {FirstreportComponent} from '../../components/firstreport/firstreport.component';
import {User} from '../../models/user';

@Component({
  selector: 'app-homeagent',
  templateUrl: './homeagent.page.html',
  styleUrls: ['./homeagent.page.scss'],
})
export class HomeagentPage implements OnInit {

  agent: Agent;
  idAgent: string;
  nameagent: string;
  surnameagent: string;
  lat: number;
  lon: number;
  assigns: Assign[];
  idAssign: number;
  idUser: number;
  constructor(public firebaseService: FirebaseService,
              public modalCtrl: ModalController,
              public agentService: AgentService,
              public router: Router,
              public alarmService: AlarmService,
              private geolocation: Geolocation,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public assignService: AssignService) {firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigateByUrl('/homeagent');
    }
    else {
      this.router.navigateByUrl('/slides');
    }
  }); }

  ngOnInit() {
    this.idAgent = localStorage.getItem('idAgent');
    this.agentService.getAgentById(this.idAgent).subscribe( data => {
      console.log(data);
      this.agent = data;
      this.nameagent = data.userDTO.name;
      this.surnameagent = data.userDTO.surname;
      // tslint:disable-next-line:max-line-length
      if (localStorage.getItem('tokendevice') != null){
      this.sendToken(data.userDTO.idUser, data.userDTO.name, data.userDTO.surname, data.userDTO.sex, data.userDTO.birthDate, data.userDTO.state, data.userDTO.address, data.userDTO.email, data.userDTO.city);
    }
    });
    this.getAssignByIdAgent();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      this.agentService.updatePosition(this.idAgent, this.lat, this.lon, this.agent).subscribe( data => {
        console.log(data);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAssignByIdAgent(){
    this.assignService.getAllAssignByIdAgent(this.idAgent).subscribe(data => {
      console.log(data);
      this.assigns = data;
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.getAssignByIdAgent();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async openConfirmAlert(idAssign, idIntervention, address, lat, lon, type, manager, agent, count, event) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Are you sure?',
      buttons: [{
        text: 'Confirm',
        handler: () => {
          this.updateAssign(idAssign, idIntervention, address, lat, lon, type, manager, agent, count);
          this.doRefresh(event);
        }
      },
        {
          text: 'Cancel',
          role: 'cancel'
        }]
    });
    await alert.present();
  }

  updateAssign(idAssign, idIntervention, address, lat, lon, type, manager, agent, count){
    let confirm: number;
    let concluded: number;
    let startValidate: string;
    let intervention: any;
    let startDate: string;
    let status: string;
    status = 'assigned';
    startValidate = new Date(new Date().getTime()).toISOString();
    console.log(startValidate);
    startDate = startValidate;
    confirm = 1;
    concluded = 0;
    intervention = {
        idIntervention,
        type,
        lat,
        lon,
        address,
        startDate,
        status,
        count
    };
    // tslint:disable-next-line:max-line-length
    this.assignService.updateAssign(idAssign, {idAssign, manager, agent, intervention, confirm, concluded, startValidate} as Assign).subscribe(data => {
      console.log(data);
      this.getAssignByIdAgent();
    });
  }

  async openPhotoPage(idIntervention){
    const navigationExtras: NavigationExtras = {
      state: {
        idintervention: idIntervention
      }
    };
    await this.router.navigateByUrl('/addphotoagent', navigationExtras);
  }

  async openFirstReportModal(idIntervention, idAssign, startValidate){
    console.log(idIntervention);
    const modal = await this.modalCtrl.create({
      component: FirstreportComponent,
      componentProps: { value: idIntervention, value1: idAssign, value2: startValidate}
    });

    await modal.present();
    await modal.onDidDismiss().then(data => {
      this.getAssignByIdAgent();
    });
  }

  sendToken(idUser, name, surname, sex, birthDate, state, address, email, city){
    birthDate = new Date(birthDate).toISOString();
    console.log(birthDate);
    const token = localStorage.getItem('tokendevice');
    this.agentService.updateAgent(idUser, {name, surname, email, birthDate, sex, address, city, state, token} as User  ).subscribe(data => {
      console.log(data);
    });
  }


}
