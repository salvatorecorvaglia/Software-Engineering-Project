import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Alarm} from "../../models/alarm";
import firebase from "firebase";
import {FirebaseService} from "../../services/firebase.service";
import {WarningService} from "../../services/warning.service";

@Component({
  selector: 'app-view-alarms',
  templateUrl: './view-alarms.component.html',
  styleUrls: ['./view-alarms.component.css']
})
export class ViewAlarmsComponent implements OnInit {
  alarms: Alarm[];
  idIntervention: any;
  idAlarm: number;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public router: Router,
              public firebaseService: FirebaseService,
              public alarmService: WarningService) {
    this.idIntervention = this.router.getCurrentNavigation().extras.state.idIntervention;
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['alarms_list']);
    }
    else {
      this.router.navigate(['']);
    }
  });
  }

  ngOnInit(): void {
    this.alarmService.getAlarmsByIdIntervention(this.idIntervention).subscribe(data => {
      console.log(data);
      this.alarms = data;
    });
  }
}
