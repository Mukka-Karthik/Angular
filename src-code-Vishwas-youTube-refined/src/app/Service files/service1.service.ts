import { Injectable } from '@angular/core';

@Injectable({ //this injectable might ome in future where this service is injected in another service
  providedIn: 'root'
})
export class Service1Service {

  constructor() { 

    
  }


  getConsoleLogs()
  {
    return "Output is done by using a concept of dependency injector"
  }
}

