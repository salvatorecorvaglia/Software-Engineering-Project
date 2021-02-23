import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomecitizenPage } from './homecitizen.page';

const routes: Routes = [
  {
    path: '',
    component: HomecitizenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomecitizenPageRoutingModule {}
