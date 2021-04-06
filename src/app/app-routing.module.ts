import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersModule} from './users/users.module';
import { ProductsModule } from './products/products.module';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
