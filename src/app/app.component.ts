import { Component,OnInit } from '@angular/core';
import {UserService} from './app.service';
import {TwainQuoteService} from './twain-quote.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit { 
  name = '';quoteVal="...";
  constructor(private userService:UserService,private twainQuoteService:TwainQuoteService){}
  
  ngOnInit():void{
    this.name = this.userService.user.name;
    this.twainQuoteService.getQuote().then((quote:string)=>this.quoteVal=quote);
  }

  title = 'Test Karma-Jasmine'
}
