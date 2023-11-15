import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User=new User("","","","");
  message:any;

  constructor(private service:RegistrationServiceService){}

  ngOnInit() {
  }
    public registerNow(){
      let resp=this.service.doRegister(this.user);
      resp.subscribe((data)=> this.message=data);
    }
  }

