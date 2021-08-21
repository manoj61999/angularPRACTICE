import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

export class User {
  id: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password:string | undefined;
  phone:string | undefined;
  dob:string | undefined;
}
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

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/api/getUserDetails');
  }
  getproduct(): Observable<pro> {
    return this.httpClient.get<pro>(this.endPoint + '/api/viewProduct');
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
    return this.httpClient.post<User>(this.endPoint + '/api/register', JSON.stringify(senddata), this.httpHeader)
  }  
}