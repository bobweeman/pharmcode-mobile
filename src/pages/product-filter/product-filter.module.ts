import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductFilterPage } from './product-filter';

@NgModule({
  declarations: [
    ProductFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductFilterPage),
  ],
})
export class ProductFilterPageModule {}
