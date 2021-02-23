import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {LoginModalComponent} from "../../components/login-modal/login-modal.component";
import {SignupModalComponent} from "../../components/signup-modal/signup-modal.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [HomePage, LoginModalComponent, SignupModalComponent],
  entryComponents: [LoginModalComponent, SignupModalComponent]
})
export class HomePageModule {}
