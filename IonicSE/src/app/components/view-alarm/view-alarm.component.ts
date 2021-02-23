import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {InterventionService} from '../../services/intervention.service';
import {Intervention} from '../../models/intervention';


@Component({
  selector: 'app-view-alarm',
  templateUrl: './view-alarm.component.html',
  styleUrls: ['./view-alarm.component.scss'],
})
export class ViewAlarmComponent implements OnInit {
  intervention: Intervention;
  startDate: string;
  endDate: string;
  durate: string;
  value;
  address: string;
  firstReport: string;
  lastReport: string;
  constructor(public interventionService: InterventionService,
              public modalCtrl: ModalController,
              public router: Router) { }

  ngOnInit() {
    this.interventionService.getInterventionById(this.value).subscribe( data => {
      console.log(data);
      this.intervention = data;
      this.address = data.address;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.firstReport = data.firstReport;
      this.lastReport = data.lastReport;
      this.durate = this.getDataDiff(this.startDate, this.endDate);
      console.log(this.durate);
    });
  }
  dismissModal(){
    this.modalCtrl.dismiss();
  }

  getDataDiff(startDate, endDate) {
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    const minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    const seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    const durate = hours + 'h, ' + minutes + 'm, ' + seconds + 's';
    return durate;
  }

}
