import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit{

  Payment:any;
  constructor(private service:RegistrationServiceService){}

  ngOnInit(){
    let resp=this.service.doGetAll();
    resp.subscribe((data)=>this.Payment=data)
  }
}
