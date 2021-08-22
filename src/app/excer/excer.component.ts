//pipes method

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excer',
  templateUrl: './excer.component.html',
  styleUrls: ['./excer.component.css']
})
export class ExcerComponent implements OnInit {

 //year and time
  
  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';
  
  //currency 

  itemPrice1: number = 5.50;
  itemPrice2: number = 10;
  itemPrice3: number = 50;
  
  //Decimal value eg:7.436

  myNum1: number = 7.4364646;
  myNum2: number = 0.92343456;
  
  //Percentage

  numA: number = 0.349;
  numB: number = 2.4595;
  
  //LowerCase & UpperCase

  convertText1: string = "I AM BEING MANAGED BY PIPES";  //LowerCase
  convertText2: string = "I Am Being Managed By Pipes";  //UpperCase
  
  //Slice 

  Users= ["name","age","class","degree","submit","success"]
  // Users= [1,2,3,4,5,6,7,8,9,0,3,4,5]

  constructor() { }

  ngOnInit(): void {

  }
}
