import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MyMaterialModule } from  '../material.module';

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
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MyMaterialModule,
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
