import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import firebase from 'firebase';
import {AlertController, ModalController, NavController, ToastController} from '@ionic/angular';
import {CitizenService} from '../../services/citizen.service';
import {Citizen} from '../../models/citizen';
import {NavigationExtras, Router} from '@angular/router';
import {AlarmService} from '../../services/alarm.service';
import {Alarm} from '../../models/alarm';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ViewAlarmComponent} from '../../components/view-alarm/view-alarm.component';
import {User} from '../../models/user';

@Component({
  selector: 'app-homecitizen',
  templateUrl: './homecitizen.page.html',
  styleUrls: ['./homecitizen.page.scss'],
})
export class HomecitizenPage implements OnInit {

  citizen: Citizen;
  alarms: Alarm[];
  idcitizen: string;
  namecitizen: string;
  surnamecitizen: string;
  getdate: string;
  date: string;
  lat: number;
  lon: number;
  idAlarms: number;

  constructor(public firebaseService: FirebaseService,
              public modalCtrl: ModalController,
              public citizenService: CitizenService,
              public router: Router,
              public alarmService: AlarmService,
              private geolocation: Geolocation,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigateByUrl('/homecitizen');
    }
    else {
      this.router.navigateByUrl('/slides');
    }
  }); }

  ngOnInit(): void {
    this.idcitizen = localStorage.getItem('idCitizen');
    this.citizenService.getCitizenById(this.idcitizen).subscribe( data => {
      console.log(data);
      this.citizen = data;
      this.getAlarmsByIdCitizen();
      this.namecitizen = data.userDTO.name;
      this.surnamecitizen = data.userDTO.surname;
      if (localStorage.getItem('tokendevice') != null) {
        this.sendToken(data.userDTO.idUser, data.userDTO.name, data.userDTO.surname, data.userDTO.sex, data.userDTO.birthDate, data.userDTO.state, data.userDTO.address, data.userDTO.email, data.userDTO.city);
      }
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      this.citizenService.updatePosition(this.idcitizen, this.lat, this.lon, this.citizen).subscribe( data => {
        console.log(data);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAlarmsByIdCitizen(){
    this.alarmService.getAlarmsByIdCitizen(this.idcitizen).subscribe(data => {
      console.log(data);
      this.alarms = data;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAlarmsByIdCitizen();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async openViewAlarmModal(idIntervention){
    console.log(idIntervention);
    const modal = await this.modalCtrl.create({
      component: ViewAlarmComponent,
      componentProps: { value: idIntervention}
    });

    await modal.present();
  }

async openPhotoPage(idIntervention){
  const navigationExtras: NavigationExtras = {
    state: {
      idintervention: idIntervention
    }
  };
  await this.router.navigateByUrl('/addphoto', navigationExtras);
}

deleteAlarm(idAlarm){
    this.alarmService.deleteAlarm(idAlarm).subscribe(data => {
      console.log(data);
      this.getAlarmsByIdCitizen();
    });
    this.presentToast();
}

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Alarm Eliminated',
      duration: 2000
    });
    await toast.present();
  }

  async presentAlert(idAlarm) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Are you sure?',
      buttons: [{
        text: 'Confirm',
        handler: () => {
          this.deleteAlarm(idAlarm);
        }
      },
        {
          text: 'Cancel',
          role: 'cancel'
        }]
    });

    await alert.present();
  }

  sendToken(idUser, name, surname, sex, birthDate, state, address, email, city){
    birthDate = new Date(birthDate).toISOString();
    console.log(birthDate);
    const token = localStorage.getItem('tokendevice');
    this.citizenService.updateCitizen(idUser, {name, surname, email, birthDate, sex, address, city, state, token} as User  ).subscribe(data => {
      console.log(data);
    });
  }
}


