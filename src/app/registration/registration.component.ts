//DataService.ts intraction (http service method)

import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  convertText: string = "I Am Being Managed By Pipes";

  Users: any = [];
  Product: any = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchUsers()
    this.fetchProduct()
  }
 
  fetchUsers() {
    return this.data.getUsers().subscribe((items:any)=> {
      console.log(items)
      this.Users = items;
      this.Users=this.Users.data
  })
}
fetchProduct() {
     return this.data.getproduct().subscribe((items1:any)=> {
      console.log(items1)
      this.Product = items1;
      this.Product = this.Product.data
    })
  }  
}

