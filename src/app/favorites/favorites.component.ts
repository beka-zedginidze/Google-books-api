import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/messenger.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  books = []
  constructor(private msg: MessengerService) { }

  
  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: any) => {
      console.log(product)
      this.books.push({
    
      })

    })
  }

}
