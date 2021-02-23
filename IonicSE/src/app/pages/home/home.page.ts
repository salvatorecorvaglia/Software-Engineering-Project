import {Component, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import {LoginModalComponent} from '../../components/login-modal/login-modal.component';
import {SignupModalComponent} from '../../components/signup-modal/signup-modal.component';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  isSignedIn = false;
  constructor(private modalCtrl: ModalController,
              public firebaseService: FirebaseService
  ) {localStorage.setItem('user', null);
     localStorage.setItem('user', null);
     localStorage.setItem('idManager', null);
     localStorage.setItem('idAgent', null);
     localStorage.setItem('idCitizen', null); }
  ngOnInit(){
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async openLoginModal(){
   const modal = await this.modalCtrl.create({
     component: LoginModalComponent
   });

   await modal.present();
  }

  async openSignupModal(){
    const modal = await this.modalCtrl.create({
      component: SignupModalComponent
    });
    await modal.present();
  }




}
