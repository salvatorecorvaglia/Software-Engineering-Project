import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {


  constructor(public router: Router) {
    localStorage.setItem('user', null);
    localStorage.setItem('idManager', null);
    localStorage.setItem('idAgent', null);
    localStorage.setItem('idCitizen', null);
  }

  ngOnInit() {
  }



}


