import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent extends NavComponent {

    newLIst = NavComponent.bookList

}
