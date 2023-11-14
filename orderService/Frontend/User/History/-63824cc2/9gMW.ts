import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

 
  purch: Purchase=new Purchase({ id: 0, name: "", quantity: 0, price: 15000 },{});
  

  constructor(private service:RegistrationServiceService){}

  Purchase:any;
  ngOnInit(){
    
  }

  public placeOrder(){
    const randomId = Math.floor(Math.random() * 1000) + 1;
    this.purch.order.price = this.purch.order.quantity * 15000;
    let resp=this.service.doPurchase(this.purch);
      resp.subscribe((data)=> this.Purchase=data);
  }
}
