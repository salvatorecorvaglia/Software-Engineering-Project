import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddphotoagentPageRoutingModule } from './addphotoagent-routing.module';

import { AddphotoagentPage } from './addphotoagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddphotoagentPageRoutingModule
  ],
  declarations: [AddphotoagentPage]
})
export class AddphotoagentPageModule {}
