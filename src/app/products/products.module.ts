import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ProductsComponent
  ],
   exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]

})
export class ProductsModule { }
