import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyTabsPage } from './pharmacy-tabs';

@NgModule({
  declarations: [
    PharmacyTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyTabsPage),
  ],
})
export class PharmacyTabsPageModule {}
