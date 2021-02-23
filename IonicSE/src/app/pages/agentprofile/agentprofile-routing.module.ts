import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentprofilePage } from './agentprofile.page';

const routes: Routes = [
  {
    path: '',
    component: AgentprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentprofilePageRoutingModule {}
