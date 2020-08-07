import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: '',
    children: [
      {
        path: '',
        data: {
          breadcrumb: 'Product',
        },
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
