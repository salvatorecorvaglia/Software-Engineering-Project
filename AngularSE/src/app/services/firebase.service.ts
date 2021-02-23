import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "./user.service";



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: User;
  idagent: number;
  idmanager: number;
  constructor(public firebaseAuth: AngularFireAuth,
              public router: Router,
              public userservice: UserService
              ) {}
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.userData = JSON.parse(localStorage.getItem('user'));
      this.userservice.getUserByEmail(email).subscribe(data => {
        this.userData = data;
        this.idagent = data.idAgent;
        this.idmanager = data.idManager;
        this.gotodash(this.idmanager, this.idagent);
        console.log(data);
        console.log(this.idagent);
        console.log(this.idmanager);
      });
    }).catch((error) => {
      window.alert(error.message);
    });

  }

  gotodash(idmanager, idagent){
    if (idmanager){
      console.log(idmanager);
      console.log(idagent);
      localStorage.setItem('idManager', idmanager);
      this.router.navigate(['dashboard_manager']);
    }else if (idagent){
      localStorage.setItem('idAgent', idagent);
      this.router.navigate(['dashboard_agent']);
    }else if (!idmanager && !idagent){
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
      this.router.navigate(['']);
    });
  }

}

