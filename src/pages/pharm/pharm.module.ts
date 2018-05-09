import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmPage } from './pharm';

@NgModule({
  declarations: [
    PharmPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmPage),
  ],
})
export class PharmPageModule {}
