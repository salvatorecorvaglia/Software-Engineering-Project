import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';

import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {environment} from '../environments/environment';
import {ViewAlarmComponent} from './components/view-alarm/view-alarm.component';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {FirstreportComponent} from './components/firstreport/firstreport.component';




@NgModule({
  declarations: [AppComponent,  ViewAlarmComponent, FirstreportComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FormBuilder, InAppBrowser, FCM, Camera , Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}
