import { Component, OnInit } from '@angular/core';
import {Products} from '../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Products[];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id:1,
        title:'iPhone',
        description:'this is iphone',
        url:'http://apple.com/iphone'
      },
      {
        id:2,
        title:'iPhone 8',
        description:'this is iphone 8',
        url:'http://apple.com/iphone8'
      }
    ]
  }

}
