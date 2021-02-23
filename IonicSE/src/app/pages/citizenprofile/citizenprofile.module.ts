import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenprofilePageRoutingModule } from './citizenprofile-routing.module';

import { CitizenprofilePage } from './citizenprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenprofilePageRoutingModule
  ],
  declarations: [CitizenprofilePage]
})
export class CitizenprofilePageModule {}
