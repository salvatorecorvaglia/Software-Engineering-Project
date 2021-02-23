import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import firebase from 'firebase';
import {Alarm} from '../../models/alarm';
import {WarningService} from '../../services/warning.service';
import {Intervention} from '../../models/intervention';
import {InterventionService} from '../../services/intervention.service';
import {Image} from '../../models/image';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-warning-list',
  templateUrl: './warnings-list.component.html',
  styleUrls: ['./warnings-list.component.css']
})
export class WarningsListComponent implements OnInit {

  alarms: Alarm[];
  interventions: Intervention[];
  idIntervention: number;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService,
              public interventionService: InterventionService,
              public imageService: ImageService,
              public router: Router) {firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['warnings_list']);
    }
    else {
      this.router.navigate(['']);
    }
  }); }

  ngOnInit(): void {
    this.getInterventionByStatus();
  }


   getInterventionByStatus(){
    const status = 'signaled';
    this.interventionService.getInterventionByStatus(status).subscribe( data => {
      console.log(data);
      this.interventions = data;
    });
  }

}
