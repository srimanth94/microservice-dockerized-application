import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Purchase } from '../purchase';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

   orderIdCounter: number = 1;
 
  purch: Purchase=new Purchase({ id: this.orderIdCounter++, name: "", quantity: 0, price: 15000 },{});

  constructor(private service:RegistrationServiceService){}

  Purchase:any;
  ngOnInit(){
    
  }

  public placeOrder(){
    this.purch.order.id = this.orderIdCounter++;
    this.purch.order.quantity = this.purch.order.price * this.purch.order.quantity;
    let resp=this.service.doPurchase(this.purch);
      resp.subscribe((data)=> this.Purchase=data);
  }
}
