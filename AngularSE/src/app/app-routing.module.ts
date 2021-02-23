import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guard/auth.guard";
import {DashboardManagerComponent} from "./components/dashboard-manager/dashboard-manager.component";
import {DashboardAgentComponent} from "./components/dashboard-agent/dashboard-agent.component";
import {AgentsListComponent} from "./components/agents-list/agents-list.component";
import {TypesListComponent} from "./components/types-list/types-list.component";
import {WarningsListComponent} from "./components/warnings-list/warnings-list.component";
import {ViewImagesComponent} from "./components/view-images/view-images.component";
import {ViewAlarmsComponent} from "./components/view-alarms/view-alarms.component";
import {AssignInterventionComponent} from "./components/assign-intervention/assign-intervention.component";
import {CloseReportComponent} from "./components/close-report/close-report.component";
import {DeleteInterventionsComponent} from "./components/delete-interventions/delete-interventions.component";
import {AddAgentComponent} from "./components/add-agent/add-agent.component";
import {LoginComponent} from "./components/login/login.component";
import {ContactsComponent} from "./components/contacts/contacts.component";






const routes: Routes = [ {path: '' , redirectTo: '', pathMatch: 'full', component: HomeComponent},
  { path: 'login_form', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'dashboard_manager', component: DashboardManagerComponent, canActivate: [AuthGuard] },
  { path: 'dashboard_agent', component: DashboardAgentComponent, canActivate: [AuthGuard] },
  { path: 'agents_list', component: AgentsListComponent, canActivate: [AuthGuard] },
  { path: 'types_list', component: TypesListComponent, canActivate: [AuthGuard] },
  { path: 'warnings_list', component: WarningsListComponent, canActivate: [AuthGuard] },
  { path: 'alarms_list', component: ViewAlarmsComponent, canActivate: [AuthGuard] },
  { path: 'images_list', component: ViewImagesComponent, canActivate: [AuthGuard] },
  { path: 'assign_agent', component: AssignInterventionComponent, canActivate: [AuthGuard] },
  { path: 'close_report', component: CloseReportComponent, canActivate: [AuthGuard] },
  { path: 'delete_int', component: DeleteInterventionsComponent, canActivate: [AuthGuard] },
  { path: 'add_agent', component: AddAgentComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
