import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenprofilePage } from './citizenprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenprofilePageRoutingModule {}
