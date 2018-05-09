import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmDetailsPage } from './pharm-details';

@NgModule({
  declarations: [
    PharmDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmDetailsPage),
  ],
})
export class PharmDetailsPageModule {}
