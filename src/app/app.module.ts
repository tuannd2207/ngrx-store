import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ProductData} from "./product-management/fake-data/product-data";
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    StoreModule.forRoot({}),
    BrowserModule,
    RouterModule,
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
