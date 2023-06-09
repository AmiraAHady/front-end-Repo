import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {

  countClicks: number=0;
  constructor() { }

  ngOnInit() {
    this.countClicks = 0;
  }

  addClick(){
    this.countClicks++;
  }

  removeClick(){
    this.countClicks--;
  }

  sayhelloFromEvent():String{
    return 'hello from Event^-^'
  }

}
