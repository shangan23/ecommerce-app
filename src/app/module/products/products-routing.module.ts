import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/product/list/list.component';
import { CreateComponent } from 'src/app/product/create/create.component';
import { EditComponent } from 'src/app/product/edit/edit.component';

const routes: Routes = [
  { path: 'products', component: ListComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
