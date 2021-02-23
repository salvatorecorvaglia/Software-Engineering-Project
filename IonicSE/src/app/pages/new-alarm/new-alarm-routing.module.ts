import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAlarmPage } from './new-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: NewAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAlarmPageRoutingModule {}
