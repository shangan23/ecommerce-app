import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './module/auth.module';
import { SharedModule } from './module/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './module/products/products.module';
import { StoreModule } from '@ngrx/store';
import AuthReducer from '../store/reducers/auth.reducer.js';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    ProductsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: AuthReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
