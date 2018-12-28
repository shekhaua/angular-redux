import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageLayoutComponent, HeaderComponent, FooterComponent, SideNavigationComponent],
  exports: [
    PageLayoutComponent
  ]
})
export class PageLayoutModule { }
