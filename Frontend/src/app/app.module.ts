import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationServiceService } from './registration-service.service';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MainpageComponent,
    HomepageComponent,
    PurchaseComponent,
    OrderHistoryComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ RegistrationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
