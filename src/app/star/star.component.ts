import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit ,OnChanges{

  constructor() { }

ngOnChanges(changes: SimpleChanges): void {
  console.log("inside on changes");
  
}  

  ngOnInit(): void {
  }

}
