import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthModule } from './module/auth.module';
import { SharedModule } from './module/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './module/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ProductsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
