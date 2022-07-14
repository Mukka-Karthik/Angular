import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from './HTML files/Routing files/page-not-found/page-not-found.component';
import { BrowserLoadDefaultComponentComponent } from './Routing Components/browser-load-default-component/browser-load-default-component.component';
import { LocationComponentComponent } from './Routing Components/location-component/location-component.component';


const routes: Routes = [

 

  
  {path : "testing" , component : PageNotFoundComponent },
 
  
  // {path : "**", component : LocationComponentComponent},

  
  //above is known as wild card route 
  //this should be always at last as it works for every word including testing
  //If included in the beginning , the it works for testing also


  // {path : "" , component : BrowserLoadDefaultComponentComponent},
   //for default path , use following way

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

