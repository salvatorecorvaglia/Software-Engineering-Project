import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeagentPageRoutingModule } from './homeagent-routing.module';

import { HomeagentPage } from './homeagent.page';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeagentPageRoutingModule,
        OrderModule
    ],
  declarations: [HomeagentPage]
})
export class HomeagentPageModule {}
