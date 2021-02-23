import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CitizenService} from '../../services/citizen.service';
import {Citizen} from '../../models/citizen';
import {ToastController} from '@ionic/angular';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-citizenprofile',
  templateUrl: './citizenprofile.page.html',
  styleUrls: ['./citizenprofile.page.scss'],
})
export class CitizenprofilePage implements OnInit {

  citizen: Citizen;
  idCitizen: string;
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
              public citizenService: CitizenService,
              public toastCtrl: ToastController) {firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigateByUrl('/citizenprofile');
    }
    else {
      this.router.navigateByUrl('/slides');
    }
  }); }

  ngOnInit() {
   this.getCitizenData();

  }
  async getCitizenData(){
    this.idCitizen = localStorage.getItem('idCitizen');
    await this.citizenService.getCitizenById(this.idCitizen).subscribe(data => {
      this.citizen = data;
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

async updateCitizen(name, surname, sex, birthDate, address, city, state){
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
    let pushId: string;
    pushId = localStorage.getItem('token');
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
      pushId
    };
    await this.citizenService.updateCitizen(this.idUser, user).subscribe(data => {
      console.log(data);
      this.getCitizenData();
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
