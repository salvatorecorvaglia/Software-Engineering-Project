import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomecitizenPageRoutingModule } from './homecitizen-routing.module';

import { HomecitizenPage } from './homecitizen.page';
import {OrderModule} from 'ngx-order-pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomecitizenPageRoutingModule,
        OrderModule
    ],
  declarations: [HomecitizenPage]
})
export class HomecitizenPageModule {}
