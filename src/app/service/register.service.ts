import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class User {
  constructor(
    public Userid: number,
    public userName: string,
    public userPassword: string,
    public email: string,
    public userType: string,
    public mobileNumber: string
  )  {}
}



@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  
  registerUser(user)  {
    console.log(user);
    return this.httpClient.post<User>('http://localhost:9090/user-registration-page', user);
  }
  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:9090/user-list');
  }
  
}
