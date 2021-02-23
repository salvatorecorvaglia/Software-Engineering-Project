import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FirebaseService} from '../../services/firebase.service';
import {CitizenService} from '../../services/citizen.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  isSignedIn = false;
  constructor(private modalCtrl: ModalController,
              public firebaseService: FirebaseService,
              public citizenService: CitizenService
              ) { }

  dismissModal(){
this.modalCtrl.dismiss();
  }

  async onSignin( email: string, password: string){
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }




}
