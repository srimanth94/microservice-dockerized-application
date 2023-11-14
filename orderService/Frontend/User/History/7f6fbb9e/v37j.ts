import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PurchaseComponent } from './purchase/purchase.component';


const routes: Routes = [
{path:"",component:MainpageComponent},
{path:"home",component:HomepageComponent},
{path:"register",component:RegistrationComponent},
{path:"login",component:LoginComponent},
{path:"orderHistory",component:OrderHistoryComponent},
// {path:"paymentHistory",component:PaymentHistoryComponent},
{path:"pget",component:PurchaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
