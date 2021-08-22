//registration.component.ts  intraction (HTTP Service method)

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  //HTTP Service
import { Observable} from 'rxjs';                                //HTTP Service
import { FormGroup } from '@angular/forms';

// user 

export class User {
  id: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password:string | undefined;
  phone:string | undefined;
  dob:string | undefined;
}

// product (pro)

  export class pro {
    productname:String | undefined;
    productid:String | undefined;
    email:String | undefined;
    customerid:String | undefined;
    phone:String | undefined;
    address:String | undefined
  }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  //observable

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/api/getUserDetails');  //user
  }
  getproduct(): Observable<pro> {
    return this.httpClient.get<pro>(this.endPoint + '/api/viewProduct');  //product (pro)
  }
  
  
  addUser(data: FormGroup): Observable<User> {
    
    let senddata={
    "firstname":data.value.firstName,
    "lastname":data.value.lastName,
    "email":data.value.email,
    "password":data.value.password,
    "phone":data.value.number,
    "dob":data.value.DateoBirth
    }
    console.log(senddata,"hiii")
    return this.httpClient.post<User>(this.endPoint + '/api/register', JSON.stringify(senddata), this.httpHeader)  //node.js endpoint /api/register
  }  
}
