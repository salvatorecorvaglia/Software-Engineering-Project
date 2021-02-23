import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user';
import {UserService} from './user.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userData: User;
  idagent: number;
  idcitizen: number;
  token: string;
  iduser: number;

  constructor(public firebaseAuth: AngularFireAuth,
              public router: Router,
              private fcm: FCM,
              public userservice: UserService,
              public platform: Platform) {
  }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      if (this.platform.is('android')) {
        this.fcm.getToken().then(data => {
          this.token = data;
          console.log(data);
          localStorage.setItem('tokendevice', data);
        });
      }
      localStorage.setItem('user', JSON.stringify(res.user));
      this.userData = JSON.parse(localStorage.getItem('user'));
      this.userservice.getUserByEmail(email).subscribe(data => {
        this.userData = data;
        console.log(data);
        this.idagent = data.idAgent;
        this.idcitizen = data.idCitizen;
        this.gotodash(this.idcitizen, this.idagent);
        console.log(data);
        console.log(this.idagent);
        console.log(this.idcitizen);
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  gotodash(idcitizen, idagent){
    if (idcitizen){
      localStorage.setItem('idCitizen', idcitizen);
      this.router.navigateByUrl('/homecitizen');
    }else if (idagent){
      localStorage.setItem('idAgent', idagent);
      this.router.navigateByUrl('/homeagent');
    }else if (!idcitizen && !idagent){
      window.alert('User not authorized');
    }

  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  logout() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('idManager');
      localStorage.removeItem('idAgent');
      this.router.navigateByUrl('/slides');
    });
  }

}
