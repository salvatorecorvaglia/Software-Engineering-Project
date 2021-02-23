import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";
import {ImageService} from "../../services/image.service";
import firebase from "firebase";
import {Image} from "../../models/image";

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.css']
})
export class ViewImagesComponent implements OnInit {
idIntervention: any;
images: Image[];
idImage: number;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              public imageService: ImageService) {
    this.idIntervention = this.router.getCurrentNavigation().extras.state.idIntervention;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['images_list']);
      }
      else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit(): void {
    this.imageService.getAllImageByIdIntervention(this.idIntervention).subscribe(data => {
      this.images = data;
    });
  }

}
