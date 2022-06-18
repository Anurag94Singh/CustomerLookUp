import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { LookUpFormComponent } from './components/look-up-form/look-up-form.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
  ],
  declarations: [LandingComponent, LookUpFormComponent, NewCustomerComponent],
})
export class CustomerModule {}
