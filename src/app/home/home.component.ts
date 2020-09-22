import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recomendedBooks;
  onSearch1: boolean = true;
  books;
  srcBooks;
  numberfavBooks: number = 0;
  

  constructor(private data: DataService,) { }
   
  addBooksToFavorites(book) {

    const bookExistInCart = NavComponent.bookList.find(({title}) => title === book.volumeInfo.title);
    console.log("works")
    if (!bookExistInCart) {
      NavComponent.bookList.push({...book, num: 1});
      this.numberfavBooks += 1;
      console.log(this.numberfavBooks, "number fav books")
      console.log(NavComponent.bookList)
      alert("Add to favorite")
      return;
    } 
    bookExistInCart.num += 1;
    
  }


  OnSearch(s) {
    this.srcBooks = this.data.SearchBooks(s)
    .subscribe((data) => {
      this.srcBooks  = data.items;
      console.log('OnSearch data: ', this.srcBooks);
      
    });
    this.onSearch1 = false;
  }


  ngOnInit() {
    this.data.SearchBooks('The Lord Of The Rings')
        .subscribe((data) => {
          this.books  = data.items;
          console.log('ngOnInit', data);
        });
        this.data.SearchBooks1('THE GUARDIANS')
        .subscribe((data) => {
          this.recomendedBooks  = data.items;
          console.log('ngOnInit-recent', data);
        });     
  }

}
