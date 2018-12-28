import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: './home/home.module#HomeModule'} // todo: change to page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
