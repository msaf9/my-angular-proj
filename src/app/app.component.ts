import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes, animation } from '@angular/animations'

@Component({
  selector: 'app-root',
  template:
    `
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  `
  // `
  // <p>{{someProperty}}</p>

  // `
  // `
  // <h1 [ngClass]="titleClasses">Hello</h1>
  // <h1 [ngStyle]="titleStyle">Hello!</h1> 
  // <br>
  // <button (mouseenter) = "myEvent($event)">My Button</button>
  // `
  // `
  // <button [disabled] = "buttonStatus == 'enable'">My Button</button>
  // `
  // `
  // <img src="{{ angularLogo }}">
  // <img [src]="angularLogo">
  // <img bind-src="angularLogo">
  // `
  // './app.component.html'
  // `
  // <h1>New</h1>

  // <div *ngIf = "myArr; then tmpl1 else tmpl2"></div>

  // <ng-template #tmpl1>True!</ng-template>
  // <ng-template #tmpl2>False!</ng-template>
  // `
  ,
  styles: [
    `
  p{
    width: 200px;
    background: lightgray;
    margin: 100px auto;
    text-align: center;
    padding: 20px;
    font-size: 1.5em;
  }

  .red-title{
    color: red;
  }

  .large-title{
    font-size: 4em;
  }

  h1{
    text-decoration: underline;
  }
  `],
  // Urls: ['./app.component.css']

  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {


  constructor(private dataservice: DataService) {

  }

  someProperty: string = '';
  ngOnInit() {
    console.log(this.dataservice.cars);
    this.someProperty = this.dataservice.myData();
  }

  myArr = true;
  title = 'Application';
  angularLogo = "https://angular.io/assets/images/logos/angular/angular.png";
  // buttonStatus = 'enable';

  // titleClass = true;
  // titleClasses = {
  //   'red-title': true,
  //   'large-title': true
  // };
  // myEvent(event: any){
  //   console.log(event);
  // }

  // titleStyle = {
  //   'color': 'red',
  //   'font-size': '4em'
  // };


  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'state' ? 'large' : 'small');
  }
}
