import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentprofilePageRoutingModule } from './agentprofile-routing.module';

import { AgentprofilePage } from './agentprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentprofilePageRoutingModule
  ],
  declarations: [AgentprofilePage]
})
export class AgentprofilePageModule {}
