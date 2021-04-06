import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    StoreComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
   ///// )/////,
    RouterModule.forChild([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
      { path: 'store', component: StoreComponent },
     ]),

  ]
})
export class ProductsModule { }
