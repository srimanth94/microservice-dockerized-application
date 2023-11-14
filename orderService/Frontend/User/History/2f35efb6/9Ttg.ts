import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }

  
public doRegister(user:any){
return this.http.post("http://localhost:6969/Auth/register",user,{responseType:'text' as 'json'});
}

public doLogin(logger:any){
return this.http.post("http://localhost:6969/Auth/login",logger,{responseType:'text' as 'json'})
}

public doPurchase(purch:any){
  return this.http.post("http://localhost:1111/Order/bookOrder",purch,{responseType:'text' as 'json'});
}

public doGetAll(){
  return this.http.get("http://localhost:1111/Order/getAll");
}
public doViewPayments(){
  return this.http.get("http://localhost:2222/Payment/viewPayments");
}
}
