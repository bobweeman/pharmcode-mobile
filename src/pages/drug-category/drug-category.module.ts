import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugCategoryPage } from './drug-category';

@NgModule({
  declarations: [
    DrugCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugCategoryPage),
  ],
})
export class DrugCategoryPageModule {}
