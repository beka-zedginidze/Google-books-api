import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessengerService } from 'src/app/messenger.service'

@Component({
  selector: 'app-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recomendedBooks;
  onSearch1: boolean = true;
  favIcon: boolean = true;
  books;
  srcBooks;
  numberfavBooks: number = 0;
  
  

  constructor(private data: DataService, private msg: MessengerService) { }

  handleAddToCart() {
    this.msg.sendMsg(this.books)
  }

  OnSearch(s) {
    this.srcBooks = this.data.SearchBooks(s)
    .subscribe((data) => {
      this.srcBooks  = data.items;
      console.log('OnSearch data: ', this.srcBooks);
      
    });
    this.onSearch1 = false;
  }

  // addFavorites() {
  //   this.favIcon = false;
  //   console.log("it works")

  // }

  numberFav() {
    // this.numberfavBooks = this.

  }
  ngOnInit() {
    this.data.SearchBooks('The Lord Of The Rings')
        .subscribe((data) => {
          this.books  = data.items;
          console.log('ngOnInit---------------------------------', data);
        });
        this.data.SearchBooks1('THE GUARDIANS')
        .subscribe((data) => {
          this.recomendedBooks  = data.items;
          console.log('ngOnInit---------------------------------', data);
        });     
  }

}
