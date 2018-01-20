import { Component } from '@angular/core';
import {UserService} from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers:[UserService]
})
export class AppComponent  { 
  constructor(public userService:UserService){}
  name = this.userService.isLoogedIn;
}
