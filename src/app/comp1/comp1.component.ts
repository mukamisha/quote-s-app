import { Component, OnInit } from '@angular/core';
import{List} from '../list';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  esther:List [] = [{
    id:3,
    name:'jacky',

  }];
  constructor() { }

  ngOnInit() {
  }

}
