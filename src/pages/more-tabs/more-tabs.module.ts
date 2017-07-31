import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreTabsPage } from './more-tabs';

@NgModule({
  declarations: [
    MoreTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreTabsPage),
  ]
})
export class MoreTabsPageModule {}
