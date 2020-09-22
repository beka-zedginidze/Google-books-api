import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: ['en', 'ka'];
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ge']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ge/) ? browserLang : 'en');
    console.log(translate.getLangs(),"language ---------------------------------------",
    browserLang)
  }




  @Input() books: any[];
  title = 'books-api';
  ret () {
    return this.books
  }

    
}
