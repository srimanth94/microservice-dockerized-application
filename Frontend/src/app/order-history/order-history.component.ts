import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit{

  Order:any
  constructor(private service:RegistrationServiceService){}

  ngOnInit(){
    let resp=this.service.doGetAll();
    resp.subscribe((data)=>this.Order=data)
  }
}
