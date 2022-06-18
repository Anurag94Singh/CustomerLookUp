import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { LookUpFormComponent } from './components/look-up-form/look-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
  ],
  declarations: [
    LandingComponent,
    LookUpFormComponent
  ]
})
export class CustomerModule { }