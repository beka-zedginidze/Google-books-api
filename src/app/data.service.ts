import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  // SearchByISBN(isbn) {
  //   var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=10");
  //   return this.http.get(encodedURI);
  // }
  SearchBooks(search): Observable<any>  {
    console.log(search);
    const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + search + '&maxResults=2');
    // return this.http.get(encodedURI);
    return this.http.get(encodedURI);
  }

  SearchBooks1(search): Observable<any>  {
    console.log(search);
    const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + search + '&maxResults=3');
    // return this.http.get(encodedURI);
    return this.http.get(encodedURI);
  }

}
