import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeagentPage } from './homeagent.page';

const routes: Routes = [
  {
    path: '',
    component: HomeagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeagentPageRoutingModule {}
