import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashborad', pathMatch: 'full'},
  // {
  //   path: 'intro',
  //   loadChildren: () => import('./modules/common/intro/intro.module').then(m => m.IntroModule),
  //   canActivate: []
  // },
  {
    path: 'dashborad',
    loadChildren: () => import('./dashborad/dashborad.module')
      .then(m => m.DashboradModule)
  },
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
