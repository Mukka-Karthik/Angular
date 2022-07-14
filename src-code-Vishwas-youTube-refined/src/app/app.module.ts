import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import {HighSchool,FirstComponent,BindingProperties,
  StyleBinding_Component,ParentComponent,ChildComponent,
  PipesComponent,ServicesComponent,EmptyComponent,


  formComponent1



  } from "./app.component"


import { Service1Service } from './Service files/service1.service';
import { PageNotFoundComponent } from './HTML files/Routing files/page-not-found/page-not-found.component';
import { LocationComponentComponent } from './Routing Components/location-component/location-component.component';
import { BrowserLoadDefaultComponentComponent } from './Routing Components/browser-load-default-component/browser-load-default-component.component';


@NgModule({
  declarations: [
   // AppComponent,
   HighSchool,
   FirstComponent,
   BindingProperties,
   StyleBinding_Component,ParentComponent,ChildComponent,
   PipesComponent,ServicesComponent,EmptyComponent,



  PageNotFoundComponent,
     LocationComponentComponent,
     BrowserLoadDefaultComponentComponent,
     formComponent1


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [Service1Service],
  bootstrap: [formComponent1]
})
export class AppModule { }
