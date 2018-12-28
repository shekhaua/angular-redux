import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutModule } from './page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    PageLayoutModule
  ],
  declarations: [
  ],
  exports: [
    PageLayoutModule
  ]
})
export class CoreModule { }
