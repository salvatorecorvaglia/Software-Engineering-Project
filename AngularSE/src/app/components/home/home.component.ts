import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  isSignedIn = false;
  constructor(private modalService: NgbModal, public firebaseService: FirebaseService, public router: Router
  ) {localStorage.setItem('user',null)}

  ngOnInit(){
    localStorage.setItem('user',null)
    if(localStorage.getItem('user')!== null)
      this.isSignedIn= true;
    else
      this.isSignedIn= false;

  }



}
