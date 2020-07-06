import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  static bookList = [];
  
  constructor() {
    NavComponent.bookList;
    console.log("test nav")
  
   }

  ngOnInit(): void {
  }

}
