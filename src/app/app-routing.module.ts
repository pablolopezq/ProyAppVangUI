import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashComponent
  },
  {
    path: 'nav',
    component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
