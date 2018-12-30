import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SalesService } from '../shared/sales.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      sales: SalesService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
