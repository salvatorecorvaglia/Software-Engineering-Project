import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddphotoagentPage } from './addphotoagent.page';

const routes: Routes = [
  {
    path: '',
    component: AddphotoagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddphotoagentPageRoutingModule {}
