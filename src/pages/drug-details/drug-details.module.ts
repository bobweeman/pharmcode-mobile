import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugDetailsPage } from './drug-details';

@NgModule({
  declarations: [
    DrugDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugDetailsPage),
  ],
})
export class DrugDetailsPageModule {}
