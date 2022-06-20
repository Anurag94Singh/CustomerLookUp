import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { LookUpFormComponent } from './components/look-up-form/look-up-form.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { SharedService } from './components/shared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [LandingComponent, LookUpFormComponent, NewCustomerComponent],
  providers: [SharedService]
})
export class CustomerModule {}
