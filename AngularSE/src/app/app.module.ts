import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
import {FirebaseService} from './services/firebase.service';
import {DashboardManagerComponent} from './components/dashboard-manager/dashboard-manager.component';
import { DashboardAgentComponent } from './components/dashboard-agent/dashboard-agent.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { TypesListComponent } from './components/types-list/types-list.component';
import { WarningsListComponent } from './components/warnings-list/warnings-list.component';
import {OrderModule} from 'ngx-order-pipe';
import { ViewAlarmsComponent } from './components/view-alarms/view-alarms.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';
import { AssignInterventionComponent } from './components/assign-intervention/assign-intervention.component';
import { CloseReportComponent } from './components/close-report/close-report.component';
import { DeleteInterventionsComponent } from './components/delete-interventions/delete-interventions.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardManagerComponent,
    DashboardAgentComponent,
    AgentsListComponent,
    TypesListComponent,
    WarningsListComponent,
    ViewAlarmsComponent,
    ViewImagesComponent,
    AssignInterventionComponent,
    CloseReportComponent,
    DeleteInterventionsComponent,
    AddAgentComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
      authDomain: "xxxxxxxxxxxxxxxxxxxxxxx",
      projectId: "xxxxxxxxxxxxxxxxxxxxxxx",
      storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx",
      appId: "xxxxxxxxxxxxxxxxxxxxxxx",
      measurementId: "xxxxxxxxxxxxxxxxxxxxxxx"
    }),
    NgbModule,
    OrderModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
