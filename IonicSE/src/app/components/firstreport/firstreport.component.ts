import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../services/intervention.service';
import {ModalController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Intervention} from '../../models/intervention';
import {AssignService} from '../../services/assign.service';
import {Assign} from '../../models/assign';
import {Manager} from '../../models/manager';
import {Agent} from '../../models/agent';
import {AgentService} from '../../services/agent.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {CitizenService} from '../../services/citizen.service';

@Component({
  selector: 'app-firstreport',
  templateUrl: './firstreport.component.html',
  styleUrls: ['./firstreport.component.scss'],
})
export class FirstreportComponent implements OnInit {
  intervention: Intervention;
  value;
  value1;
  value2;
  manager: Manager;
  agent: Agent;
  idAgent: string;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public interventionService: InterventionService,
              public modalCtrl: ModalController,
              public router: Router,
              public assignService: AssignService,
              public agentService: AgentService,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      firstreport: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.interventionService.getInterventionById(this.value).subscribe( data => {
    console.log(data);
    this.intervention = data;
  });
    this.idAgent = localStorage.getItem('idAgent');
    this.agentService.getAgentById(this.idAgent).subscribe(data => {
      console.log(data);
      this.agent = data;
      this.manager = data.managerDTO;
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  sendFirstReport(type, idIntervention, lat, lon, address, firstReport){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      alert('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
    let confirm: number;
    let concluded: number;
    let intervention: any;
    let status: string;
    let idAssign: any;
    let endDate: string;
    let manager: Manager;
    let agent: Agent;
    let startValidate: string;
    let startDate: string;
    startValidate = this.value2;
    startDate = startValidate;
    manager = this.manager;
    agent = this.agent;
    confirm = 1;
    concluded = 0;
    status = 'assigned';
    endDate = new Date(new Date().getTime()).toISOString();
    idAssign = this.value1;
    intervention = {
      idIntervention,
      type,
      lat,
      lon,
      address,
      startDate,
      endDate,
      firstReport,
      status
    };
    this.assignService.updateAssign(idAssign, {idAssign, manager, agent, intervention, confirm, concluded, startValidate} as Assign).subscribe(data => {
      console.log(data);
    });
    this.dismissModal();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Report Sended',
      duration: 2000
    });
    toast.present();
  }
}
