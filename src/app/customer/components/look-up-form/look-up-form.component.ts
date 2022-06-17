import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-look-up-form',
  templateUrl: './look-up-form.component.html',
  styleUrls: ['./look-up-form.component.scss']
})
export class LookUpFormComponent implements OnInit {

  lookupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    
  }
}