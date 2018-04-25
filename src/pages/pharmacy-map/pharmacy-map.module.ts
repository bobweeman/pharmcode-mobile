import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyMapPage } from './pharmacy-map';

@NgModule({
  declarations: [
    PharmacyMapPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyMapPage),
  ],
})
export class PharmacyMapPageModule {}
