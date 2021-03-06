// login (formGroup and formControl)
// even emitter method

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {
  userdetails = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('')
  });
  
  name=""
  orderby: any;
constructor() { }

ngOnInit() {
};

  loginFunction(){
    console.log(this.userdetails.value);
  }
  
  //EventEmitter method

  showData($event: any){
    this.name="the button is clicked"   //<the button is clicked> will display when the button is clicked 
    console.log("button clicked")       // <button clicked> it will display inside the console when the button is clicked

  }
}


