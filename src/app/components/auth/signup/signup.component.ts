import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ISignup } from '../../../models/signup';
import { SignupService } from '../../../services/signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private siteKey: String;
  private form: FormGroup;

  constructor(private signupService: SignupService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signupService.getRecaptchaKey().subscribe(
      result => this.setRecaptchaKey(result),
      error => alert('Error ' + error)
    );

    this.form = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      matchingPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      recaptcha: new FormControl('', [Validators.required])
    });
  }

  setRecaptchaKey(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.siteKey = result.data.siteKey;
  }

  signup(signupData: ISignup) {
    this.signupService.signup(signupData).subscribe(
      result => this.router.navigateByUrl('/auth/login'),
      error => console.dir('Error ' + error)
    );
  }
}
