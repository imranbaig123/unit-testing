import { Component } from '@angular/core';

@Component({
  selector: 'app-app-unit',
  templateUrl: './app-unit.component.html',
  styleUrls: ['./app-unit.component.scss']
})
export class AppUnitComponent {
 

  content = 'you have been warned';
  hideContent = true;
  severity = 423;

  constructor(){}
  ngOnInit(){

  }

  toggle(){
    this.hideContent = !this.hideContent;
  }
}
