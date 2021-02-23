import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import firebase from 'firebase';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Citizen} from '../../models/citizen';
import {FirebaseService} from '../../services/firebase.service';
import {CitizenService} from '../../services/citizen.service';




@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private modalCtrl: ModalController,
              public firebaseService: FirebaseService,
              public citizenService: CitizenService,
              public formBuilder: FormBuilder
              ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      sex: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],

    });
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  // tslint:disable-next-line:variable-name
  onSignUp(name, surname, email, password, sex, birthdate1, address,  city, state){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      alert('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
    console.log(birthdate1);
    // tslint:disable-next-line:variable-name
    let birthDate: string;
    const idUser = null;
    const token = 'null';
    const lat = null;
    const lon = null;
    birthDate = birthdate1.toString().slice(0, -13);
    // tslint:disable-next-line:variable-name
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
    this.citizenService.addCitizen( {lat, lon, userDTO} as Citizen).subscribe(data => {
      console.log(data);
    });
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
       window.alert('Correctly registered');
       this.SendVerificationMail();
      }).catch((error) => {
        window.alert(error.message);
      });

  }

  SendVerificationMail() {
    return firebase.auth().currentUser.sendEmailVerification();
  }

}
