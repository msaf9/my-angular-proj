import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'BMW', 'Buick'
  ];

  myData(){
    return 'This is my data, man!';
  }
}
