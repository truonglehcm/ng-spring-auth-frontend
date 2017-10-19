import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'ng2-ui-auth';
import { Router } from '@angular/router';
import { IAuth } from '../../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  login(loginData: IAuth) {
    this.auth.login(loginData)
        .subscribe({
            error: (err: any) => console.dir(err),
            complete: () => this.router.navigateByUrl('/')
        });
  }

}
