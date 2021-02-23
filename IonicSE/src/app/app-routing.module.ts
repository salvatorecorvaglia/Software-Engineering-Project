import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  }
 ,
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'homecitizen',
    loadChildren: () => import('./pages/homecitizen/homecitizen.module').then(m => m.HomecitizenPageModule)
  },
  {
    path: 'new-alarm',
    loadChildren: () => import('./pages/new-alarm/new-alarm.module').then( m => m.NewAlarmPageModule)
  },
  {
    path: 'addphoto',
    loadChildren: () => import('./pages/addphoto/addphoto.module').then( m => m.AddphotoPageModule)
  },
  {
    path: 'homeagent',
    loadChildren: () => import('./pages/homeagent/homeagent.module').then( m => m.HomeagentPageModule)
  },
  {
    path: 'addphotoagent',
    loadChildren: () => import('./pages/addphotoagent/addphotoagent.module').then( m => m.AddphotoagentPageModule)
  },
  {
    path: 'citizenprofile',
    loadChildren: () => import('./pages/citizenprofile/citizenprofile.module').then( m => m.CitizenprofilePageModule)
  },
  {
    path: 'agentprofile',
    loadChildren: () => import('./pages/agentprofile/agentprofile.module').then( m => m.AgentprofilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
