import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import firebase from 'firebase';
import {InterventionService} from '../../services/intervention.service';
import {Intervention} from '../../models/intervention';
import {Alarm} from '../../models/alarm';

@Component({
  selector: 'app-delete-interventions',
  templateUrl: './delete-interventions.component.html',
  styleUrls: ['./delete-interventions.component.css']
})
export class DeleteInterventionsComponent implements OnInit {

  idIntervention: number;
  interventions: Intervention[];
  alarms: Alarm[];
  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              public interventionService: InterventionService) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['delete_int']);
      }
      else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit(): void {
    this.getInterventionByStatus();
  }

  async getInterventionByStatus(){
    const status = 'closed';
    await this.interventionService.getInterventionByStatus(status).subscribe( data => {
      console.log(data);
      this.interventions = data;
    });
  }




}
