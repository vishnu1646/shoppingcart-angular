import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const myRoute :Routes =[
  {
    path:"",
    component: AddproductComponent
  },
  {
    path:"add",
    component: ViewproductsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
