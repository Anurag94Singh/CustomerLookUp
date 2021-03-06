import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  countrySates: any[] = [];

  constructor(private fb: FormBuilder, private sharedService: SharedService){}

  ngOnInit() {
    this.sharedService.getCountryStates().subscribe(
      (data: any) => {
        this.countrySates = data;
        console.log(data);
      }
    )
  }

  profileForm = this.fb.group({
    region: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address: this.fb.group({
      addressLine: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}