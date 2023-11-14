import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

  constructor(private service:RegistrationServiceService){}
  ngOnInit(){
    
  }
}
