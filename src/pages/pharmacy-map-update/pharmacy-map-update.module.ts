import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyMapUpdatePage } from './pharmacy-map-update';

@NgModule({
  declarations: [
    PharmacyMapUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyMapUpdatePage),
  ],
})
export class PharmacyMapUpdatePageModule {}
