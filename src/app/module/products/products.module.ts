import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from 'src/app/product/create/create.component';
import { EditComponent } from 'src/app/product/edit/edit.component';
import { ListComponent } from 'src/app/product/list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
