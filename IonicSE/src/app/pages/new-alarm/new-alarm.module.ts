import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAlarmPageRoutingModule } from './new-alarm-routing.module';

import { NewAlarmPage } from './new-alarm.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewAlarmPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [NewAlarmPage]
})
export class NewAlarmPageModule {}
