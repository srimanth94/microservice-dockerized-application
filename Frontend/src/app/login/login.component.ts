import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Login1 } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

logger: Login1=new Login1("","");

  message:any;

constructor(private service:RegistrationServiceService){}

  ngOnInit() {
    
  }

  public loginNow(){
    let resp=this.service.doLogin(this.logger);
    resp.subscribe((data)=> this.message=data);
    //this.router.navigate(['/login']);
  }
}
