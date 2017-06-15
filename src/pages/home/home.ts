import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: number = 9.9738484;
  lng: number = -84.0186632;
  
  constructor() {}

}
