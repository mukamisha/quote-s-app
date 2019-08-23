import { Component } from '@angular/core';
import {List} from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  object:List [] = [{
    id:1,
    name:'mukamisha',

  }]
};
